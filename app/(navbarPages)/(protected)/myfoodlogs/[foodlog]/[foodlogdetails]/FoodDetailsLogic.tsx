'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Params, SubmittedFoodLogsType } from '@/types/MyFoodLog.types';
import { useMyContext } from '@/MyContext';
import Image from 'next/image';
import { FoodLogTypes } from '@/types/FoodLog.types';
import { FoodItemType } from '@/types/FoodItem.types';
import { ServingsType } from '@/types/Food.types';

type MyFoodLogProps = {
  params: Params;
};

const FoodDetailsLogic: React.FC<MyFoodLogProps> = ({ params }) => {
  const { submittedFoodLogs } = useMyContext();
  const [myLog, setMyLog] = useState<FoodItemType | null>(null);
  const [isImage, setIsImage] = useState<string>();

  let logDetails: FoodItemType | null = null;

  useEffect(() => {
    setMyLog(logDetails);

    if (logDetails && (logDetails as FoodItemType).hasOwnProperty('image')) {
      // isImage = (logDetails as FoodItemType).image;

      let myImg = (logDetails as FoodItemType).image;

      setIsImage(myImg);
    } else {
      setIsImage('hidden');
    }
  }, []);

  submittedFoodLogs.find((e: SubmittedFoodLogsType) => {
    let logs;
    if (e.foodLogId === params.foodlog) {
      logs = e.foodLog;
    }

    logDetails = Array.isArray(logs)
      ? logs.find(
          (logItem: FoodLogTypes) => logItem.foodId === params.foodlogdetails
        )
      : null;

    return logDetails;
  });

  let servingSizes: ServingsType | undefined;

  if (logDetails) {
    let { servingSizes: servingDetails } = logDetails;

    servingSizes = servingDetails;
  }

  let grams: number = 0;

  let ounces: number = 0;

  let servingsArr: any[] = [];

  if (servingSizes) {
    servingsArr = Object.entries(servingSizes as FoodItemType);
  }

  // checking to see if first index is grams or ounces for proper conversion
  if (servingsArr.length > 0) {
    servingsArr.forEach((e) => {
      if (e[1].label === 'Gram') {
        grams = e[1].quantity;
        ounces = grams * 0.03527396;
      } else if (e[1].label === 'Ounce') {
        ounces = e[1].quantity;
        grams = ounces * 28.3495;
      } else return;
    });
  }

  const foodQuantity: number = myLog?.quantity ?? 0;

  const combinedGramsAndQuantity: number = grams * foodQuantity;
  const combinedOuncesandQuantity: number = ounces * foodQuantity;

  const toFixedGrams: number = parseInt(combinedGramsAndQuantity.toFixed(0));
  const toFixedOunces: number = parseInt(combinedOuncesandQuantity.toFixed(2));

  const router = useRouter();

  return (
    <main className='w-full flex justify-center items-middle relative top-20 md:top-40 p-5'>
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
            {myLog?.label}
          </h1>
          <div className='w-full py-px bg-gray-500' />
        </div>

        <div className='flex  w-full flex-col  md:flex-row md:justify-around'>
          <div className='flex flex-col justify-evenly  xxs:items-center xs:items-start xs:mx-5 '>
            <div className='   text-lg md:text-2xl font-medium mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Category:{' '}
                <span className='  font-bold '>{myLog?.category}</span>
              </p>
            </div>

            <div className='   text-lg md:text-2xl font-medium  mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Quantity: <span className='  font-bold'>{myLog?.quantity}</span>
              </p>
            </div>

            <div className='   text-lg md:text-2xl font-medium  mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Calories:{' '}
                <span className='  font-bold'>
                  {myLog?.calories?.toFixed(0)} Kcal
                </span>
              </p>
            </div>
            <div className='   text-lg md:text-2xl font-medium  mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Protein:{' '}
                <span className='  font-bold'>
                  {myLog?.protein?.toFixed(0)} g
                </span>
              </p>
            </div>
            <div className='   text-lg md:text-2xl font-medium mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Carbs:{' '}
                <span className='  font-bold'>
                  {myLog?.carbs?.toFixed(0)} g
                </span>
              </p>
            </div>
            <div className='   text-lg md:text-2xl font-medium  mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Fats:{' '}
                <span className='  font-bold'>{myLog?.fats?.toFixed(0)} g</span>
              </p>
            </div>

            <div className='   text-lg md:text-2xl font-medium  mb-4  '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Ounces:{' '}
                <span className='  font-bold'>
                  {servingsArr.length <= 0 ||
                  toFixedGrams === 0 ||
                  toFixedOunces === 0 ? (
                    <span>N/A</span>
                  ) : (
                    <span>
                      {toFixedOunces}
                      <span className='text-sm relative '>oz</span>
                    </span>
                  )}
                </span>
              </p>
            </div>
            <div className='text-lg md:text-2xl font-medium mb-4   '>
              <p className='text-left xs:text- md:text-xl  md:w-full '>
                Grams:
                <span className='  font-bold'>
                  {' '}
                  {servingsArr.length <= 0 ||
                  toFixedGrams === 0 ||
                  toFixedOunces === 0 ? (
                    <span>N/A</span>
                  ) : (
                    <span>
                      {toFixedGrams}
                      <span className='text-sm relative'>g</span>
                    </span>
                  )}
                </span>
              </p>
            </div>
          </div>

          {/* Image */}
          <div className={`my-5 mx-5 ${isImage} `}>
            <Image
              src={myLog?.image ?? 'No Image'}
              priority={true}
              width={350}
              height={350}
              alt={myLog?.label ?? ''}
              style={{ objectFit: 'contain' }}
              className={`rounded-lg ${isImage}`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoodDetailsLogic;
