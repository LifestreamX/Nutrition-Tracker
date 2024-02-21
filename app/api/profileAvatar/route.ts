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
      select: { profileAvatar: true }, // Select only the profileAvatar field
    });

    console.log(user);

    // Return the theme preference in the response body
    return new Response(user?.profileAvatar || JSON.stringify(null), {
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

    const requestBody = await request.json();
    const { profileAvatar } = requestBody;

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

export async function DELETE(request: Request, response: Response) {
  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    if (!userEmail) {
      throw new Error('User email not found in session');
    }

    // Delete the profile avatar from the user
    const deleteUser = await prisma.user.update({
      where: { email: userEmail },
      data: { profileAvatar: null },
    });

    return new Response('Profile avatar deleted successfully', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Error deleting profile avatar:', error);
    return new Response(`Error: ${error}`, {
      status: 500,
    });
  }
}
