import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { compare } from 'bcryptjs';

// Store the lockout status in memory for quick access
const lockedUsers = new Map<string, NodeJS.Timeout>();

export async function POST(request: Request, response: Response) {
  try {
    const requestData = await request.json();

    // Find the user based on their email
    const user = await prisma.user.findFirst({
      where: {
        email: requestData.email,
      },
    });

    if (!user) {
      // If the user doesn't exist, return an error response
      return NextResponse.json(
        {
          message: 'Invalid email or password',
        },
        { status: 401 }
      );
    }

    // Check if the user is locked due to too many login attempts
    if (user.loginAttempts && user.loginAttempts >= 3) {
      const currentTime = new Date();
      const lastAttemptTime = user.lastLoginAttempt || new Date(0);
      const cooldownPeriod = 30 * 1000; // 30 seconds in milliseconds
      const timeDifference = currentTime.getTime() - lastAttemptTime.getTime();

      if (timeDifference < cooldownPeriod) {
        // Account is still in cooldown period, return an error response
        return NextResponse.json({
          message: `Too many login attempts. Account is temporarily locked for 30 seconds`,
        });
      } else {
        // Reset login attempts and last attempt time
        await prisma.user.update({
          where: { email: requestData.email },
          data: {
            loginAttempts: 0,
            lastLoginAttempt: null,
          },
        });
      }
    }

    // Comparing Password from login form to database
    const passwordMatch = await compare(
      requestData.password,
      user.passwordHash || ''
    );

    // If the passwords do not match
    if (!passwordMatch) {
      // Increment login attempts and update last attempt time
      const newAttemptCount = (user.loginAttempts || 0) + 1;
      await prisma.user.update({
        where: { email: requestData.email },
        data: {
          loginAttempts: newAttemptCount,
          lastLoginAttempt: new Date(),
        },
      });

      if (newAttemptCount >= 3) {
        // Account is locked due to multiple failed attempts
        // Set a timeout to reset the login attempts after 30 seconds
        const resetTimeout = setTimeout(async () => {
          await prisma.user.update({
            where: { email: requestData.email },
            data: {
              loginAttempts: 0,
              lastLoginAttempt: null,
            },
          });
          // Remove the user from the lockedUsers map
          lockedUsers.delete(requestData.email);
        }, 30 * 1000); // 30 seconds in milliseconds

        // Store the timeout in the lockedUsers map for future reference
        lockedUsers.set(requestData.email, resetTimeout);

        return NextResponse.json({
          message: `Too many login attempts. Account is temporarily locked for 30 seconds`,
        });
      } else {
        // Return unsuccessful login message with remaining attempts
        return NextResponse.json({
          message: 'Login Unsuccessful',
          attemptsLeft: 3 - newAttemptCount,
        });
      }
    }

    // Successful login
    // Reset login attempts and last attempt time
    await prisma.user.update({
      where: { email: requestData.email },
      data: {
        loginAttempts: 0,
        lastLoginAttempt: null,
      },
    });

    // Add code to handle successful login
  } catch (error) {
    // Handle any errors that occur during login process
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
