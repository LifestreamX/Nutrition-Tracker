'use client';

import { useMyContext } from '@/MyContext';
import React from 'react';
import Link from 'next/link';
import MyFoodLog from './[foodLogId]/page';
import { useRouter } from 'next/navigation';
import FoodLog from '../dashboard/components/foodlog/FoodLog';
import { SubmittedFoodLogsTypes } from '@/types/MyFoodLog.types';
import grapes from '.././images/dashboard/grapes.png';
import Image from 'next/image';

const MyFoodLogs = () => {
  const { submittedFoodLogs } = useMyContext();

  const router = useRouter();

  return (
    <div className='w-full flex justify-center items-middle relative top-20'>
      <div className='bg-white rounded-lg shadow-2xl w-1/2 flex flex-col justify-center items-center p-10'>
        <div className='flex'>
          <Image
            src={grapes}
            alt='grapes'
            className=' w-4 h-4 md:w-6 md:h-6 '
          />
          <h1 className=' mx-4 text-lg md:text-2xl font-bold text-center mb-5 text-purple-800'>
            My Food Logs
          </h1>
          <Image
            src={grapes}
            alt='grapes'
            className=' w-4 h-4 md:w-6 md:h-6 '
          />{' '}
        </div>
        <ul className='w-full'>
          {submittedFoodLogs.map(
            ({ foodLogId, selectedDate, foodLog }: SubmittedFoodLogsTypes) => (
              <li
                key={foodLogId}
                className='text-sm md:text-xl hover:bg-purple-400 bg-slate-100 p-4 rounded-lg mt-3 cursor-pointer w-full text-center'
              >
                <Link key={submittedFoodLogs} href={`/myfoodlogs/${foodLogId}`}>
                  <h1>{selectedDate}</h1>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyFoodLogs;
