import { useMyContext } from '@/MyContext';
import { FoodLogTypes } from '@/types/FoodLog.types';
import { Prompt } from '@next/font/google';
import React, { useState } from 'react';
import ConfirmDelete from './ConfirmDelete';
import Food from './Food';

const FoodLog = () => {
  const { foodLog } = useMyContext();


  return (
    <div className='bg-white rounded-lg shadow-lg w-5/6 p-10'>
      {foodLog?.length === 0 ? (
        <h1 className='text-center text-2xl'>Nothing In Todays Food Log</h1>
      ) : (
        <div className=' p-4 grid grid-cols-1 gap-4 justify-center items-center text-center'>
          {foodLog?.map((food: FoodLogTypes) => (
            <Food key={food.foodId} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodLog;
