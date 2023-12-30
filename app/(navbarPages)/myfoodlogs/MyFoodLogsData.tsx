'use client';

import { useMyContext } from '@/MyContext';
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { specificFoodLogTypes } from '@/types/MyFoodLog.types';
import grapes from '../../.././public/images/dashboard/grapes.png';
import Image from 'next/image';
import FilterFoodLogsByDate from './components/FilterFoodLogsByDate';

import 'react-loading-skeleton/dist/skeleton.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Food Logs',
};

const MyFoodLogsData: React.FC = () => {
  const { submittedFoodLogs } = useMyContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const resultsPerPage: number = 10;
  const [noLogFound, setNoLogFound] = useState(false);

  // Calculate the index range of the food logs to display on the current page
  const indexOfLastResult: number = currentPage * resultsPerPage;
  const indexOfFirstResult: number = indexOfLastResult - resultsPerPage;
  const currentResults: specificFoodLogTypes[] = submittedFoodLogs.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  // Change the page
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const [startDate, setStartDate] = useState<string[] | Date | null>(null);

  let selectedDate = startDate;

  let sortedByYear = currentResults?.sort((a, b) => {
    const dateA = new Date(a.selectedDate[0]);

    const dateB = new Date(b.selectedDate[0]);

    return dateA.getTime() - dateB.getTime();
  });

  let dateFilterResults: null | specificFoodLogTypes = null;
  let noLog = false;

  sortedByYear.find((e) => {
    let pickedDate = String(startDate)?.replaceAll(' ', '');
    let listedDates = String(e?.selectedDate)?.replaceAll(' ', '');

    if (selectedDate !== null) {
      if (pickedDate === listedDates) {
        return [(dateFilterResults = e), (noLog = false)];
      } else {
        noLog = true;
      }
    }
  });

  let formattedFilteredDate = (
    dateFilterResults as specificFoodLogTypes | null
  )?.selectedDate
    ?.toString()
    ?.replaceAll(', ', '-')
    ?.replaceAll(' ', '-');

  let paginationClassWrapper = `flex  ${selectedDate !== null ? 'hidden' : ''}`;

  return (
    <div className='bg-white   rounded-lg shadow-2xl md:w-1/2 flex flex-col justify-center items-center p-10 dark:bg-gray-800'>
      <div className='flex'>
        <Image src={grapes} alt='grapes' className='w-4 h-4 md:w-6 md:h-6' />
        <h1 className='mx-4 text-lg md:text-2xl font-bold text-center mb-5  dark:text-white'>
          My Food Logs
        </h1>
        <Image src={grapes} alt='grapes' className='w-4 h-4 md:w-6 md:h-6' />
      </div>
      {submittedFoodLogs.length > 0 && (
        <div>
          <FilterFoodLogsByDate
            startDate={startDate}
            setStartDate={setStartDate}
          />
        </div>
      )}

      <div className='w-full mb-6 '>
        {dateFilterResults !== null || noLog ? (
          <>
            <div className='text-sm md:text-xl   dark:bg-gray-500 p-4 rounded-lg mt-3  w-full text-center'>
              {noLog ? (
                <h1>No Food Log for {selectedDate?.toLocaleString()}</h1>
              ) : (
                <div className='shadow-lg  cursor-pointer rounded-xl p-4 hover:bg-gray-100  dark:hover:bg-purple-800'>
                  <Link
                    // key={submittedFoodLogs}
                    href={{
                      pathname: `/myfoodlogs/${
                        (dateFilterResults as specificFoodLogTypes | null)
                          ?.foodLogId
                      }`,
                      query: formattedFilteredDate,
                    }}
                    legacyBehavior
                    className='bg-black'
                  >
                    <h1>
                      {
                        (dateFilterResults as specificFoodLogTypes | null)
                          ?.selectedDate[0]
                      }
                    </h1>
                  </Link>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {sortedByYear.map(
              ({ foodLogId, selectedDate, foodLog }: specificFoodLogTypes) => {
                let formattedDate = selectedDate
                  .toString()
                  .replaceAll(', ', '-')
                  .replaceAll(' ', '-');

                return (
                  <Link
                    key={foodLogId}
                    // href={`/myfoodlogs/${foodLogId}`}
                    href={{
                      pathname: `/myfoodlogs/${foodLogId}`,
                      query: formattedDate,
                    }}
                    legacyBehavior
                  >
                    <div
                      key={foodLogId}
                      className='text-sm md:text-xl hover:bg-gray-200  dark:bg-gray-500 dark:hover:bg-gray-600 bg-slate-100 p-4 rounded-lg mt-3 cursor-pointer w-full text-center'
                    >
                      <h1>{selectedDate}</h1>
                    </div>
                  </Link>
                );
              }
            )}
          </>
        )}
      </div>

      {/* pagination */}
      <nav aria-label='Page navigation'>
        <div className='flex items-center -space-x-px h-10 text-base'>
          {submittedFoodLogs.length === 0 && (
            <h1 className='font-bold text-xl'>No Food Logs Recorded</h1>
          )}

          {submittedFoodLogs.length > 0 && (
            <section className={paginationClassWrapper}>
              <div>
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
              </div>
              {Array.from({
                length: Math.ceil(submittedFoodLogs.length / resultsPerPage),
              }).map((_, index) => (
                <div key={index}>
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
                </div>
              ))}
              <div>
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
              </div>
            </section>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MyFoodLogsData;
