import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/authOptions';
import Email from 'next-auth/providers/email';

export async function POST(request: Request) {
  try {
    // Parsing JSON data from the request body
    const submittedFoodLogs = await request.json();

    console.log(submittedFoodLogs);

    // Retrieving the user's session
    const session = await getServerSession(authOptions);

    // Retrieving the user's email from the session
    const userEmail = session?.user?.email;

    // Check if the session contains the user's email
    if (!userEmail) {
      throw new Error('User email not found in session');
    }

    // Delete existing food logs associated with the user
    await prisma.submittedFoodLog.deleteMany({
      where: {
        userId: userEmail,
      },
    });

    if (!Array.isArray(submittedFoodLogs)) {
      throw new Error('Invalid submittedFoodLogs format');
    }

    // Create food logs in the database
    const createdSubmittedFoodLogs = await prisma.submittedFoodLog.createMany({
      data: submittedFoodLogs.map((log) => ({ ...log, userId: userEmail })),
    });

    return NextResponse.json(createdSubmittedFoodLogs);
  } catch (error) {
    console.error('Error adding food logs:', error);
    return new Response(`Error adding food logs: ${error}`, {
      status: 500,
    });
  }
}

export async function GET(request: Request) {
  try {
    // Retrieving the user's session
    const session = await getServerSession(authOptions);

    // Retrieving the user's email from the session
    const userEmail = session?.user?.email;

    // Check if the session contains the user's email
    if (!userEmail) {
      throw new Error('User email not found in session');
    }

    // Fetching food logs from the database for the current user
    const submittedFoodLogs = await prisma.submittedFoodLog.findMany({
      where: {
        userId: userEmail,
      },
    });

    // Returning the fetched food logs
    return new Response(JSON.stringify(submittedFoodLogs), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching food logs:', error);
    return new Response(`Error fetching food logs: ${error}`, {
      status: 500,
    });
  }
}
