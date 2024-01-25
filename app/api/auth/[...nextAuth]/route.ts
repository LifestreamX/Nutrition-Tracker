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

// Importing the NextAuth function from next-auth/next
import NextAuth from 'next-auth/next';

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
        const isValidPassword = bcrypt.compareSync(password, userPassword);

        if (!isValidPassword) {
          return null;
        }

        // Returning the user if the credentials are valid
        return user;
      },
    }),
  ],
  pages: {
    // Configuring the sign-in and sign-out pages
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
  // Configuring the secret for JWT encoding/decoding
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    // Configuring JWT encoding function
    async encode({ secret, token }) {
      if (!token) {
        throw new Error('No token to encode');
      }
      // Encoding the token using the provided secret
      return jwt.sign(token, secret);
    },
    // Configuring JWT decoding function
    async decode({ secret, token }) {
      if (!token) {
        throw new Error('No token to decode');
      }
      // Decoding the token using the provided secret
      const decodedToken = jwt.verify(token, secret);
      if (typeof decodedToken === 'string') {
        return JSON.parse(decodedToken);
      } else {
        return decodedToken;
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
    // Configuring the session callback to update the user's email in the session
    async session(params: { session: Session; token: JWT; user: User }) {
      if (params.session.user) {
        params.session.user.email = params.token.email;
      }

      return params.session;
    },
    // Configuring the JWT callback to update the token with user's email
    async jwt(params: {
      token: JWT;
      user?: User | undefined;
      account?: Account | null | undefined;
      profile?: Profile | undefined;
      isNewUser?: boolean | undefined;
    }) {
      if (params.user) {
        params.token.email = params.user.email;
      }

      return params.token;
    },
  },
};

// Creating the authentication handler using NextAuth with the provided options
const handler = NextAuth(authOptions);

// Exporting the authentication handler for both GET and POST requests
export { handler as GET, handler as POST };