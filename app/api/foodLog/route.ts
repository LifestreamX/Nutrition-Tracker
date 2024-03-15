import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/authOptions';
import Email from 'next-auth/providers/email';
import _ from 'lodash';

// Throttle the handler function to one call per second
const throttledHandler = _.throttle(async (request: Request) => {
  try {
    // Retrieving the user's session
    const session = await getServerSession(authOptions);

    // Retrieving the user's email from the session
    const userEmail = session?.user?.email;

    // Check if the session contains the user's email
    if (!userEmail) {
      throw new Error('User email not found in session');
    }

    // Parsing JSON data from the request body
    const { foodLog } = await request.json();

    // Add userId to each food log
    const processedFoodLogs = foodLog.map((log: any) => ({
      ...log,
      userId: userEmail,
    }));

    // Delete existing food logs associated with the user
    let deletedLogs = await prisma.foodLog.deleteMany({
      where: {
        userId: userEmail,
      },
    });

    // Create food logs in the database
    const createdFoodLogs = await prisma.foodLog.createMany({
      data: processedFoodLogs,
    });

    return NextResponse.json(createdFoodLogs);
  } catch (error) {
    console.error('Error adding food logs:', error);
    return new Response(`Error adding food logs: ${error}`, {
      status: 500,
    });
  }
}, 1000); // Throttle to one call per second

export async function POST(request: Request) {
  // Call the throttled handler
  return await throttledHandler(request);
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
    const foodLogs = await prisma.foodLog.findMany({
      where: {
        userId: userEmail,
      },
    });

    // Returning the fetched food logs
    return new Response(JSON.stringify(foodLogs), {
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

export async function DELETE(request: Request) {
  try {
    // Retrieving the user's session
    const session = await getServerSession(authOptions);

    // Retrieving the user's email from the session
    const userEmail = session?.user?.email;

    // Check if the session contains the user's email
    if (!userEmail) {
      throw new Error('User email not found in session');
    }

    // Delete existing food logs associated with the user
    let deletedLogs = await prisma.foodLog.deleteMany({
      where: {
        userId: userEmail,
      },
    });

    return new Response('Food logs deleted successfully', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Error adding food logs:', error);
    return new Response(`Error adding food logs: ${error}`, {
      status: 500,
    });
  }
}
