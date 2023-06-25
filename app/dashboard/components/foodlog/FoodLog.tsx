import { useMyContext } from '@/MyContext';
import { FoodLogTypes } from '@/types/FoodLog.types';
import React, { useState, useReducer, useEffect } from 'react';
import Food from './Food';
import Button from '@/app/components/Button';

const FoodLog = () => {
  const {
    foodLog,
    selectedDate,
    setSelectedDate,
    dispatch,
    setFoodLog,
    macroTargets,
  } = useMyContext();

  const [foodLogSubmittedSuccess, setFoodLogSubmittedSuccess] = useState(false);
  const [isDateNotSelected, setIsDateNotSelected] = useState(false);
  const [isMacroTargetsSet, setIsMacroTargetsSet] = useState(false);
  const [macrosSet, setMacrosSet] = useState(false);

  const isMacroTargetsEmpty = (value: string) => {
    return value === '';
  };

  const handleFoodLogSubmit = (): void => {
    if (selectedDate === null) {
      setIsDateNotSelected(true);
      setTimeout(() => {
        setIsDateNotSelected(false);
      }, 3000);
    } else if (isMacroTargetsEmpty(macroTargets.calories)) {
      setIsMacroTargetsSet(true);
      setTimeout(() => {
        setIsMacroTargetsSet(false);
      }, 3000);
    } else {
      dispatch({ type: 'SUBMIT_FOOD_LOGS', payload: foodLog });
      setFoodLogSubmittedSuccess(true);
      setFoodLog([]);
      setSelectedDate(null);
      setMacrosSet(false);
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-lg w-5/6 p-10 '>
      {isMacroTargetsSet && (
        <div className='relative bottom-10'>
          <div
            className='  w-full absolute flex justify-center items-center p-4 mb-4 text-md text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'
            role='alert'
          >
            <span className='relative right-3 font-medium text-lg'>
              Macros Not Selected!
            </span>{' '}
            Please select your macro targets
          </div>
        </div>
      )}
      {isDateNotSelected && (
        <div className='relative bottom-10'>
          <div
            className='  w-full absolute flex justify-center items-center p-4 mb-4 text-md text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'
            role='alert'
          >
            <span className='relative right-3 font-medium text-lg'>
              Date Not Selected!
            </span>{' '}
            Please select a date
          </div>
        </div>
      )}

      {foodLog?.length === 0 ? (
        foodLogSubmittedSuccess ? (
          <div className='flex justify-center items-center'>
            <h1 className='flex items-center text-center text-2xl'>
              <svg
                className='h-8 w-8 text-green-500 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span className='text-green-500'>
                {' '}
                {selectedDate?.formattedDate} Food Log Submitted
              </span>
            </h1>
          </div>
        ) : (
          <h1 className='text-center text-2xl'> Food Log Is Empty</h1>
        )
      ) : (
        <div className='relative  p-4 grid grid-cols-1 gap-4 justify-center items-center text-center'>
          <p className=' '>
            {/* {selectedDate !== null && selectedDate.formattedDate}{' '} */}
          </p>
          {foodLog?.map((food: FoodLogTypes) => (
            <Food key={food.foodId} food={food} />
          ))}

          <div className='mt-5'>
            <Button
              color='purple'
              size='medium'
              responsiveWidth={true}
              onClick={handleFoodLogSubmit}
            >
              Submit Food Log
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodLog;
