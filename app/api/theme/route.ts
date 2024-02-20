import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/authOptions';

export async function GET(request: Request, response: Response) {
  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    if (!userEmail) {
      throw new Error('User email not found in session');
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { themePreference: true }, // Select only the themePreference field
    });

    if (!user || !user.themePreference) {
      // If the user or their theme preference is not found, return an appropriate error response
      return new Response('User or theme preference not found', {
        status: 404,
      });
    }

    // Return the theme preference in the response body
    return new Response(user.themePreference, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    // If an error occurs, return an error response
    console.error('Error retrieving theme preference:', error);
    return new Response(`Error: ${error}`, {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    // Check if the session contains the user's email
    if (!userEmail) {
      throw new Error('User email not found in session');
    }

    const { themePreference } = await request.json(); // Extract theme preference from request body

    console.log(themePreference);

    const updatedUser = await prisma.user.update({
      where: { email: userEmail },
      data: { themePreference },
    });

    return new Response('Theme updated successfully', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Error updating theme preference:', error);
    return new Response(`Error: ${error}`, {
      status: 500,
    });
  }
}
