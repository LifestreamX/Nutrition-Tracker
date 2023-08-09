import Link from 'next/link';
import React from 'react';

const HomeFooter: React.FC = () => {
  return (
    <footer className='p-4 bg-white rounded-lg w-full shadow   md:p-6  flex flex-col md:flex-row items-center justify-center  dark:bg-gray-800 '>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-5'>
        © 2023 <span>nutritiontracker.</span>
        <span> All Rights Reserved.</span>
      </span>

      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <Link href='/about' className='mr-4 hover:underline md:mr-6 '>
            About
          </Link>
        </li>

        <li>
          <Link href='/contact' className='hover:underline'>
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default HomeFooter;
