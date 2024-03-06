import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/authOptions';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    const userEmail = session?.user?.email;

    if (!userEmail) {
      throw new Error('User email not found in session');
    }

    const requestBody = await request.json();
    const { profileAvatar } = requestBody;

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (
      (user?.profileAvatar?.trim() as string) === 'empty' ||
      (user?.profileAvatar?.length as any) > 0
    ) {
      return new Response(
        'Profile image is set to empty in the database. Request cancelled.',
        {
          status: 400, // Bad request status code
          headers: {
            'Content-Type': 'text/plain',
          },
        }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { email: userEmail },
      data: { profileAvatar },
    });

    return new Response('profile updated successfully', {
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
