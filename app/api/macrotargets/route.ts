import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/authOptions';

export async function POST(request: Request) {
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
    const data = await request.json();

    // Extracting macro targets data from the received JSON data
    const { updateMacroTargets } = data;
    const { calories, protein, carbs, fats } = updateMacroTargets;

    // Check if a record for the user already exists in the MacroTargets table
    let existingRecord = await prisma.macroTargets.findFirst({
      where: {
        userId: userEmail,
      },
    });

    // If an existing record is found, update it with the new values
    // If no record exists, create a new one
    if (existingRecord) {
      existingRecord = await prisma.macroTargets.update({
        where: {
          id: existingRecord.id,
        },
        data: {
          calories: parseFloat(calories),
          protein: parseFloat(protein),
          carbs: parseFloat(carbs),
          fats: parseFloat(fats),
        },
      });
    } else {
      existingRecord = await prisma.macroTargets.create({
        data: {
          userId: userEmail,
          calories: parseFloat(calories),
          protein: parseFloat(protein),
          carbs: parseFloat(carbs),
          fats: parseFloat(fats),
        },
      });
    }

    // Process the webhook payload
    // You can add additional processing logic here if needed
  } catch (error) {
    // Handling errors
    return new Response(`Webhook error: ${error}`, {
      status: 400,
    });
  }

  // Returning a success response
  return new Response('Success!', {
    status: 200,
  });
}

// GETTING DATA
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

    // Fetching the user's macro targets from the database
    const macroTargets = await prisma.macroTargets.findFirst({
      where: {
        userId: userEmail,
      },
    });

    if (!macroTargets) {
      throw new Error('Macro targets not found for the user');
    }

    // Returning the fetched macro targets
    return new Response(JSON.stringify(macroTargets), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(`Error fetching macro targets: ${error}`, {
      status: 500,
    });
  }
}
