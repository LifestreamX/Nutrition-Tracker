// Importing the Prisma client instance from the specified path
import prisma from '@/app/lib/prisma';

// Importing necessary types from the next-auth library
import { Account, AuthOptions, Profile, Session, User } from 'next-auth';

// Importing the CredentialsProvider from next-auth for handling credentials-based authentication
import CredentialsProvider from 'next-auth/providers/credentials';

// Importing bcrypt for password hashing and comparison
import bcrypt from 'bcryptjs';

// Importing jwt for encoding and decoding JSON Web Tokens
import jwt from 'jsonwebtoken';

// Importing the JWT type from next-auth
import { JWT } from 'next-auth/jwt';

import GoogleProvider from 'next-auth/providers/google';

// Configuration options for authentication
export const authOptions: AuthOptions = {
  providers: [
    // Configuring the CredentialsProvider with options for email/password authentication
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'your@email.com',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      // Authorizing the user based on provided credentials
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        try {
          // Finding a unique user in the Prisma database based on the provided email
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user) {
            return null;
          }

          // Comparing the provided password with the hashed password stored in the database
          const userPassword = user.passwordHash;
          if (userPassword === null) {
            return null; // Or handle it based on your application logic
          }

          const isValidPassword = bcrypt.compareSync(password, userPassword);

          if (!isValidPassword) {
            return null;
          }

          // Returning the user if the credentials are valid
          return user;
        } catch (error: any) {
          throw new Error(`Error authorizing user: ${error.message}`);
        }
      },
    }),


    

    // google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  pages: {
    // Configuring the sign-in and sign-out pages
    signIn: '/login',
    signOut: '/signout',
  },
  // Configuring the secret for JWT encoding/decoding
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    // Configuring JWT encoding function
    async encode({ secret, token }) {
      if (!token) {
        throw new Error('No token to encode');
      }

      try {
        // Encoding the token using the provided secret
        return jwt.sign(token, secret);
      } catch (error: any) {
        throw new Error(`Error encoding JWT: ${error.message}`);
      }
    },
    // Configuring JWT decoding function
    async decode({ secret, token }) {
      if (!token) {
        throw new Error('No token to decode');
      }
      //
      try {
        // Decoding the token using the provided secret
        const decodedToken = jwt.verify(token, secret);
        if (typeof decodedToken === 'string') {
          return JSON.parse(decodedToken);
        } else {
          return decodedToken;
        }
      } catch (error: any) {
        throw new Error(`Error decoding JWT: ${error.message}`);
      }
    },
  },

  session: {
    // Configuring the session strategy as 'jwt'
    strategy: 'jwt',
    // Setting the maximum age of the session
    maxAge: 30 * 24 * 60 * 60,
    // Setting the update age of the session
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    // GOOGLE
    // Custom callback executed after successful sign-in
    async signIn({ user, account }) {
      // If user is available, save user data to the database
      if (account?.provider === 'google' && user.email) {
        try {
          // Check if the user already exists in the database
          const existingUser = await prisma.user.findUnique({
            where: {
              email: user.email,
            },
          });

          if (!existingUser) {
            console.log('google email user does not exiost in database yet ');

            await prisma.user.create({
              data: {
                email: user.email,
                // passwordHash: user.id,
                loginAttempts: 0, // Set an initial value for loginAttempts
              },
            });
          } else {
            console.log('gmail user already exist');
            // return 'gmail user already exist in database';
          }
        } catch (error) {
          console.error('Error saving user to the database:', error);
          // return false; // Return false if an error occurs
        }
      }
      return true; // Return true if the sign-in is successful
    },

    // Configuring the session callback to update the user's email in the session
    async session(params: { session: Session; token: JWT; user: User }) {
      try {
        if (params.session.user) {
          params.session.user.email = params.token.email;
        }
        return params.session;
      } catch (error: any) {
        throw new Error(`Error handling session callback: ${error.message}`);
      }
    },
    // Configuring the JWT callback to update the token with the user's email
    async jwt(params: {
      token: JWT;
      user?: User | undefined;
      account?: Account | null | undefined;
      profile?: Profile | undefined;
      isNewUser?: boolean | undefined;
    }) {
      try {
        if (params.user) {
          params.token.email = params.user.email;
        }
        return params.token;
      } catch (error: any) {
        throw new Error(`Error handling JWT callback: ${error.message}`);
      }
    },
  },
};
