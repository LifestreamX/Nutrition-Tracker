'use client';

import { useMyContext } from '@/MyContext';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmittedFoodLogsTypes } from '@/types/MyFoodLog.types';
import grapes from '.././images/dashboard/grapes.png';
import Image from 'next/image';

const MyFoodLogs: React.FC = () => {
  const { submittedFoodLogs } = useMyContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const resultsPerPage: number = 10;

  // Calculate the index range of the food logs to display on the current page
  const indexOfLastResult: number = currentPage * resultsPerPage;
  const indexOfFirstResult: number = indexOfLastResult - resultsPerPage;
  const currentResults: SubmittedFoodLogsTypes[] = submittedFoodLogs.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  // Change the page
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className='w-full flex justify-center items-middle relative top-20'>
      <div className='bg-white  rounded-lg shadow-2xl md:w-1/2 flex flex-col justify-center items-center p-10'>
        <div className='flex'>
          <Image src={grapes} alt='grapes' className='w-4 h-4 md:w-6 md:h-6' />
          <h1 className='mx-4 text-lg md:text-2xl font-bold text-center mb-5 text-purple-800'>
            My Food Logs
          </h1>
          <Image src={grapes} alt='grapes' className='w-4 h-4 md:w-6 md:h-6' />
        </div>
        <ul className='w-full mb-6'>
          {currentResults.map(
            ({ foodLogId, selectedDate, foodLog }: SubmittedFoodLogsTypes) => (
              <li
                key={foodLogId}
                className='text-sm md:text-xl hover:bg-purple-400 bg-slate-100 p-4 rounded-lg mt-3 cursor-pointer w-full text-center'
              >
                <Link
                  key={submittedFoodLogs}
                  href={`/myfoodlogs/${foodLogId}`}
                  legacyBehavior
                >
                  <h1>{selectedDate}</h1>
                </Link>
              </li>
            )
          )}
        </ul>

        {/* pagination */}
        <nav aria-label='Page navigation  '>
          <ul className='flex items-center -space-x-px h-10 text-base'>
            {submittedFoodLogs.length === 0 && (
              <h1 className='font-bold text-xl'>No Food Logs Recorded</h1>
            )}
            {submittedFoodLogs.length > 0 && (
              <>
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    <span className='sr-only'>Previous</span>
                    <svg
                      className='w-3 h-3'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 6 10'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 1 1 5l4 4'
                      />
                    </svg>
                  </button>
                </li>
                {Array.from({
                  length: Math.ceil(submittedFoodLogs.length / resultsPerPage),
                }).map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                        currentPage === index + 1
                          ? 'text-purple-600 bg-purple-50'
                          : ''
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={
                      currentPage ===
                      Math.ceil(submittedFoodLogs.length / resultsPerPage)
                    }
                    className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    <span className='sr-only'>Next</span>
                    <svg
                      className='w-3 h-3'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 6 10'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 9 4-4-4-4'
                      />
                    </svg>
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default MyFoodLogs;
