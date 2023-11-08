'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Params } from '@/types/MyFoodLog.types';
import { useMyContext } from '@/MyContext';
import Image from 'next/image';
import { FoodLogTypes } from '@/types/FoodLog.types';

type MyFoodLogProps = {
  params: Params;
};

const FoodDetailsLogic: React.FC<MyFoodLogProps> = ({ params }) => {
  const { submittedFoodLogs } = useMyContext();

  let logDetails: any;

  submittedFoodLogs.find(
    (e: { foodLogId: string; foodLog: Array<FoodLogTypes> }) => {
      let logs;
      if (e.foodLogId === params.foodlog) {
        logs = e.foodLog;
      }

      logDetails = logs?.find((e) => {
        return e.foodId === params.foodlogdetails;
      });

      return logDetails;
    }
  );

  let { servingSizes } = logDetails;

  const router = useRouter();

  let ouncesWithQuantity: string | number =
    servingSizes[0]?.quantity * logDetails?.quantity;
  let grams = servingSizes[1]?.quantity * logDetails.quantity;

  let ouncesDecimalNumberAfter: string | number = ouncesWithQuantity
    .toFixed(2)
    .split('.')[1];

  let ounces: number =
    ouncesDecimalNumberAfter == '00'
      ? servingSizes[0]?.quantity.toFixed(0)
      : servingSizes[0]?.quantity.toFixed(2);

  let noImage = logDetails.image === undefined && 'hidden';

  return (
    <main className='w-full flex justify-center items-middle relative top-20 p-5'>
      <div className='bg-white dark:bg-gray-800 m-5   w-full rounded-lg shadow-2xl  flex flex-col justify-center items-center sm:p-20 relative md:max-w-5xl'>
        {/* back arrow */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='   mr-5 w-6 h-6 lg:w-8 lg:h-8 absolute cursor-pointer left-4 top-1 sm:top-4 hover:text-purple-600 '
          onClick={() => router.back()}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
          />
        </svg>
        {/* title */}
        <div className='mb-8 mt-10 xs:mt-0  font-semibold'>
          <h1 className='text-2xl font-purple-600  font-bold'>
            {logDetails?.label}
          </h1>
          <div className='w-full py-px bg-gray-500' />
        </div>

        <ul className='flex  w-full flex-col  xs:flex-row md:justify-around'>
          <div className='flex flex-col justify-evenly  xxs:items-center xs:items-start xs:mx-5 '>
            <li className='   text-lg md:text-2xl font-medium mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Category:{' '}
                <span className='  font-bold '>{logDetails?.category}</span>
              </p>
            </li>

            <li className='   text-lg md:text-2xl font-medium  mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Quantity:{' '}
                <span className='  font-bold'>{logDetails?.quantity}</span>
              </p>
            </li>

            <li className='   text-lg md:text-2xl font-medium  mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Calories:{' '}
                <span className='  font-bold'>
                  {logDetails?.calories.toFixed(0)} Kcal
                </span>
              </p>
            </li>
            <li className='   text-lg md:text-2xl font-medium  mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Protein:{' '}
                <span className='  font-bold'>
                  {logDetails?.protein.toFixed(0)} g
                </span>
              </p>
            </li>
            <li className='   text-lg md:text-2xl font-medium mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Carbs:{' '}
                <span className='  font-bold'>
                  {logDetails?.carbs.toFixed(0)} g
                </span>
              </p>
            </li>
            <li className='   text-lg md:text-2xl font-medium  mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Fats:{' '}
                <span className='  font-bold'>
                  {logDetails?.fats.toFixed(0)} g
                </span>
              </p>
            </li>

            <li className='   text-lg md:text-2xl font-medium  mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Ounces:{' '}
                <span className='  font-bold'>
                  {isNaN(ounces) ? <span>N/A</span> : ounces + 'oz'}
                </span>
              </p>
            </li>
            <li className='   text-lg md:text-2xl font-medium mb-4   '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Grams:
                <span className='  font-bold'>
                  {' '}
                  {isNaN(grams) ? <span>N/A</span> : grams.toFixed(0) + 'g'}
                </span>
              </p>
            </li>
          </div>

          {/* Image */}
          <div className={`my-5 mx-5 ${noImage} `}>
            <Image
              src={logDetails?.image}
              width={350}
              height={350}
              alt={logDetails.label}
              style={{ objectFit: 'contain' }}
              className='rounded-lg '
            />
          </div>
        </ul>
      </div>
    </main>
  );
};

export default FoodDetailsLogic;
