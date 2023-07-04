'use client';

import React, { useReducer, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Params } from '@/types/MyFoodLog.types';
import { useMyContext } from '@/MyContext';
import Image from 'next/image';
import { useStartTyping, useWindowSize } from 'react-use';

const MyFoodLog = ({ params }: Params) => {
  const { submittedFoodLogs } = useMyContext();
  const [state, dispatch] = useReducer();
  let result = submittedFoodLogs.find((e) => {
    return e.foodLogId === params.foodLogId;
  });
  const { width, height } = useWindowSize();
  const [totalCalories, setTotalCalories] = useState(0);

  let { foodLog, foodLogId, selectedDate } = result;

  const router = useRouter();

  const handleDeleteFoodLog = () => {
    const results = submittedFoodLogs.filter((e) => {
      return e.foodLogId !== params.foodLogId;

      // dispatch({
      //   type: 'SUBMIT_FOOD_LOGS',
      //   payload: { foodLogId: uniqid(), selectedDate, foodLog },
      // });

      // return e.foodLogId !== params.foodLogId;
    });
  };

  let currentFoodLog = submittedFoodLogs.find((e): boolean => {
    return e.foodLogId === params.foodLogId;
  });

  const imageSize = width > 768 ? 60 : 40;

  useEffect(() => {
    const totalCal = foodLog.reduce((acc, cur) => {
      acc += cur.calories;
      return acc;
    }, 0);

    setTotalCalories(totalCal);
  }, []);

  return (
    <main className='w-full flex justify-center items-middle relative top-20'>
      <div className='bg-white m-5  w-full rounded-lg shadow-2xl md:w-1/2 flex flex-col justify-center items-center p-20 relative'>
        <div className=' w-full '>
          {/* delete button */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 md:w-6 md:h-6 absolute right-6 top-6 cursor-pointer hover:text-red-500 transition-colors'
            onClick={handleDeleteFoodLog}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
            />
          </svg>
          {/* back arrow */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className=' w-5 h-5 md:w-8 md:h-8 absolute cursor-pointer left-6 top-6 hover:text-purple-600'
            onClick={() => router.back()}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            />
          </svg>
        </div>
        <div className='mb-10 flex flex-col lg:flex-row justify-center  '>
          <p className='mx-6 text-lg md:text-1xl lg:text-2xl font-bold  text-center mb-4 lg:mb-0 '>
            Date: <p className='text-purple-800'>{selectedDate}</p>
          </p>
          <p className=' mx-6 text-lg md:text-1xl lg:text-2xl font-bold  text-center'>
            Total Calories: <p className='text-purple-800'>{totalCalories}</p>
          </p>
        </div>

        {foodLog.map((food) => {
          return (
            <ul className='w-full'>
              <div className='bg-white   w-full rounded-lg shadow-lg  justify-center items-center'>
                <li className='flex w-full flex-col md:flex-row justify-center md:justify-between items-center text-md md:text-2xl font-medium text-center mb-5 hover:bg-purple-400 cursor-pointer rounded-xl p-4 '>
                  <p className='text-center text-sm md:text-lg  md:w-full mb-3 md:mb-0'>
                    {food.label}
                  </p>
                  <Image
                    src={food.image}
                    width={imageSize}
                    height={imageSize}
                    alt={`Picture of ${food} `}
                    className='rounded-2xl'
                  />
                </li>
              </div>
            </ul>
          );
        })}
      </div>
    </main>
  );
};

export default MyFoodLog;
