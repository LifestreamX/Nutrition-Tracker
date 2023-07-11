'use client';

import React, { useReducer, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Params } from '@/types/MyFoodLog.types';
import { useMyContext } from '@/MyContext';
import Image from 'next/image';
import { useWindowSize } from 'react-use';
import { SubmittedFoodLogsTypes } from '@/types/MyFoodLog.types';
import Link from 'next/link';
import DeleteFoodLogModal from './components/DeleteFoodLogModal';

interface MyFoodLogProps {
  params: Params;
}

const MyFoodLog: React.FC<MyFoodLogProps> = ({ params }) => {
  const { submittedFoodLogs, dispatch } = useMyContext();
  let result = submittedFoodLogs.find((e) => {
    return e.foodLogId === params.foodlog.toString();
  });
  const { width, height } = useWindowSize();
  const [totalCalories, setTotalCalories] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDeleteClick = (): void => {
    setIsModalOpen(true);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };


  let { foodLog, foodLogId, selectedDate } = result as SubmittedFoodLogsTypes;

  const router = useRouter();

  // let currentFoodLog = submittedFoodLogs.find((e: { foodLogId: string; }): boolean => {
  //   return e.foodLogId === params.foodLogId;
  // });

  const imageSize = width > 768 ? 70 : 50;

  useEffect(() => {
    const totalCal = foodLog.reduce(
      (acc: number, cur: { calories: number }) => {
        // console.log(cur);
        acc += cur.calories;
        return acc;
      },
      0
    );

    setTotalCalories(totalCal);
  }, []);

  const handleConfirm = (): void => {
    const deleteLog = submittedFoodLogs?.filter((e: { foodLogId: string }) => {
      return e.foodLogId !== params.foodLogId;
    });

    dispatch({
      type: 'DELETE_FOOD_LOG',
      payload: deleteLog,
    });

    router.back();
  };

  return (
    <main className='w-full flex justify-center items-middle relative top-20 p-5'>
      <div className='bg-white m-5 b  w-full rounded-lg shadow-2xl md:w-1/3 flex flex-col justify-center items-center p-5 sm:p-20 relative'>
        <div className=' w-full  '>
          {/* delete button */}
          <svg
            onClick={handleDeleteClick}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='ml-5 w-6 h-6 lg:w-8 lg:h-8 absolute right-4 top-6 cursor-pointer hover:text-red-500 transition-colors'
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
            className='mr-5 w-6 h-6 lg:w-8 lg:h-8 absolute cursor-pointer left-4 top-6 hover:text-purple-600'
            onClick={() => router.back()}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            />
          </svg>
        </div>
        <div className=' mb-10 flex flex-col lg:flex-row justify-center w-screen md:w-full  '>
          <p className='mx-6 text-lg md:text-1xl lg:text-2xl font-bold  text-center mb-4 lg:mb-0 '>
            <p className=''>Date</p>
            <p className='text-purple-800 mt-2'> {selectedDate}</p>
          </p>
          <div className=' lg:h-full lg:p-0.5  lg:bg-purple-800 lg:mx-5'></div>
          <p className=' mx-6 text-lg md:text-1xl lg:text-2xl font-bold  text-center'>
            <p className=' '>Total Calories </p>
            <p className='text-purple-800 mt-2'>{totalCalories.toFixed(0)}</p>
          </p>
        </div>

        <DeleteFoodLogModal
          isOpen={isModalOpen}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />

        {foodLog.map((food: SubmittedFoodLogsTypes) => {


         
          return (
            <ul className='w-full '>
              <Link
                key={foodLog.foodId}
                href={`/myfoodlogs/${foodLogId}/${food.foodId}`}
                legacyBehavior
              >
                <div className='bg-white   xs:w-full rounded-lg shadow-lg  justify-center items-center'>
                  <li className='flex w-full flex-col  xs:flex-row justify-between  items-center text-lg md:text-2xl font-medium  mb-5 hover:bg-purple-400 cursor-pointer rounded-xl p-4 '>
                    <p className='text-left xs:text- md:text-xl  md:w-full mb-3 md:mb-0'>
                      {food.label}
                    </p>

                    <div>
                      {food.image !== undefined && (
                        <Image
                          src={food.image}
                          width={imageSize}
                          height={imageSize}
                          alt={`Picture of ${food} `}
                          className='rounded-2xl'
                        />
                      )}
                    </div>
                  </li>
                </div>
              </Link>
            </ul>
          );
        })}
      </div>
    </main>
  );
};

export default MyFoodLog;
