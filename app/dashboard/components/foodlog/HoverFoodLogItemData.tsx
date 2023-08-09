import { useMyContext } from '@/MyContext';
import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

type ChildProps = {
  
}

const HoverFoodLogItemData = () => {
  const { foodItem } = useMyContext();

  const {
    protein,
    carbs,
    fats,
    calories,
    FIBTG,
    category,
    categoryLabel,
    foodId,
    image,
    knownAs,
    label,
    nutrients,
    quantity,
    servingSizes,
  } = foodItem;

  const data = {
    labels: ['Protein', 'Net Carbs', 'Fats'],
    datasets: [
      {
        labels: ['Protein', 'Net Carbs', 'Fats'],

        data: [protein, carbs, fats],
        // data: [{nutritionSearchData.protein},{nutritionSearchData.carbs}, {nutritionSearchData.fats} ],
        backgroundColor: ['#44D07B', '#1CCAD7', '#EA3B04'],
        borderColor: ['#fff'],
        borderWidth: 1,
      },
    ],
  };

  const pieCentered =
    image === undefined ? 'justify-center' : 'justify-between';


  return (
    <div className='absolute w-full flex justify-center items-center bottom-36 md:bottom-0 '>
      <div className='bg-white shadow-md z-10 w-1/2 md:w-96 p-8 rounded-lg dark:bg-gray-800'>
        {/* Top Half */}
        <h1 className='mb-4 font-bold text-sm md:text-lg tracking-wide'>
          {label}
        </h1>
        <div className='grid grid-cols-2 gap-5 justify-center relative left-5'>
          <div className='text-left'>
            <p className='mb-1 text-sm md:text-lg'>Category: {category}</p>
            <p className='mb-1 text-sm md:text-lg'>
              Category Label: {categoryLabel}
            </p>
            <p className='mb-1 text-sm md:text-lg'>Quantity: {quantity}</p>
            <p className='mb-1 text-sm md:text-lg'>Calories: {calories} kcal</p>
          </div>

          <div className='text-left'>
            <p className='mb-1 text-sm md:text-lg'>
              {' '}
              Protein: {protein.toFixed(1)}g
            </p>
            <p className='mb-1 text-sm md:text-lg'>
              {' '}
              Carbs: {carbs.toFixed(1)}g
            </p>
            <p className='mb-1 text-sm md:text-lg'> Fats: {fats.toFixed(1)}g</p>
          </div>
        </div>
        <hr className='mt-5' />
        {/* Bottom Half */}
        <div className={`flex w-full mt-5  ${pieCentered} `}>
          <div className='w-2/3 '>
            <span className=''>{<Pie data={data} />}</span>{' '}
          </div>

          <div className='w-1/3  justify-center items-center flex'>
            <Image
              src={image}
              width={100}
              height={100}
              alt={`Picture of ${label} `}
              className='rounded-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverFoodLogItemData;
