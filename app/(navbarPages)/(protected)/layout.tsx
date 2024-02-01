// Import necessary modules and types
<<<<<<< HEAD
=======
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { authOptions } from '../../api/auth/[...nextAuth]/route';
>>>>>>> backend
import Button from '@/app/components/Button';
import { authOptions } from '@/app/lib/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

// Define the props interface for the ProtectedLayout component
interface ProtectedLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

// Define the ProtectedLayout component
const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  // Attempt to retrieve the user session using getServerSession and authOptions
  const session = await getServerSession(authOptions);

  // Check if there is no session or the user's email is not available
  if (!session || !session.user?.email) {
    // Render a message prompting the user to log in
    console.log('USEWR NOT LOGGEDF IN!@');
    return (
      <div className='w-screen h-screen flex justify-center items-center  flex-col'>
        <h1 className='mb-6 font-semibold text-xl md:text-1xl lg:text-3xl'>
          Please sign in to access this page
        </h1>
        <Link href='/login'>
          <Button color='purple' size='large'>
            Sign In
          </Button>
        </Link>
      </div>
    );
  }

  // If the user is authenticated, render the provided children
  return <>{children}</>;
};

// Export the ProtectedLayout component
export default ProtectedLayout;
