'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    console.log(error);
  }, [error]);

  return (
    <div className=' flex flex-col items-center justify-center h-screen w-screen '>
      <div role='alert' className='m-12'>
        <div className='bg-red-500 text-white font-bold rounded-t px-4 py-2'>
          <h2 className='text-2xl font-semibold mb-4'>Something went wrong!</h2>
        </div>
        <div className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
          <p className='text-base mb-4'>
            An unexpected error occurred. Please try again later.
          </p>
          <button
            className='bg-white border-red-700 border-2 tracking-wide font-semibold text-red-700 px-4 py-2 rounded-md shadow hover:bg-gray-50'
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
