'use server';

// Import necessary modules
import prisma from '@/app/lib/prisma'; // Assuming 'prisma' is the Prisma client for interacting with the database
import bcrypt from 'bcryptjs'; // Importing the bcrypt library for password hashing

// Function for user registration
export const signUp = async (email: string, password: string) => {
  // Check if a user with the given email already exists in the database
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  // If a user with the given email already exists, return an error message
  if (user) {
    return 'User with that email already exists';
  }

  // Hash the provided password using bcrypt with a cost factor of 10
  const passwordHash = bcrypt.hashSync(password, 10);

  // Create a new user in the database with the provided email and hashed password
  await prisma.user.create({
    data: {
      email,
      passwordHash,
      loginAttempts: 0, // Set an initial value for loginAttempts
    },
  });

  return 'Successfully created new user!';
};
