import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { compare } from 'bcryptjs';

export async function POST(request: Request, response: Response) {
  const data = await request.json();

  const { email, password } = data;

  try {
    // Retrieve user information from the database based on the provided email
    const user = await prisma.user.findUnique({ where: { email } });

    // If user does not exist, return an unauthorized response
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid Email or Password' },
        { status: 401 }
      );
    }

    // ${(
    //   remainingCooldown / 1000
    // ).toFixed(0)} seconds.

    // Check if the user is currently in timeout due to multiple failed login attempts
    if (user.loginAttempts && user.loginAttempts >= 3) {
      const currentTime = new Date();
      const lastAttemptTime = user.lastLoginAttempt || new Date(0); // If lastAttemptTime is null, default to epoch
      const cooldownPeriod = 30 * 1000; // 30 seconds in milliseconds
      const timeDifference = currentTime.getTime() - lastAttemptTime.getTime();
      const remainingCooldown = cooldownPeriod - timeDifference;

      if (
        user.loginAttempts >= 3 &&
        timeDifference < cooldownPeriod &&
        remainingCooldown > 0
      ) {
        // User is still within the cooldown period
        return NextResponse.json({
          message: `Too many login attempts. Account is temporarily locked for 30 seconds`,
        });
      } else {
        // User is either not in cooldown period or cooldown period has elapsed
        // Reset login attempts if cooldown period has elapsed
        try {
          await prisma.user.update({
            where: { email },
            data: {
              loginAttempts: 0,
              lastLoginAttempt: null, // Reset last login attempt time
            },
          });
          // Return a response to indicate successful reset
          return NextResponse.json({
            message: 'Login attempts reset successfully.',
          });
        } catch (error) {
          console.error('Error resetting login attempts:', error);
        }
      }
    }

    // Compare the provided password with the stored password hash

    if (user.passwordHash) {
      const passWordMatch = await compare(password, user.passwordHash);

      // If the passwords do not match
      if (!passWordMatch && user.loginAttempts) {
        // Increment the login attempts
        const newAttemptCount = user.loginAttempts + 1;

        // Update the login attempts and timeout in case of unsuccessful login
        await prisma.user.update({
          where: { email },
          data: {
            loginAttempts: newAttemptCount,
            lastLoginAttempt: new Date(), // Set the last login attempt time
          },
        });

        // Return an unauthorized response for unsuccessful login
        if (user.loginAttempts < 3) {
          return NextResponse.json({
            message: 'Login Unsuccessful',

            attemptsLeft: 3 - newAttemptCount,
          });
        }
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
