import { useMyContext } from '@/MyContext';
import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Image from 'next/image';

ChartJS.register(ArcElement, Tooltip, Legend);

type ChildProps = {};

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
    <div className='absolute   container flex justify-center items-center bottom-36 md:bottom-0  '>
      <div className='bg-white shadow-md z-10 container md:w-96 p-8 rounded-lg dark:bg-gray-800 '>
        {/* Top Half */}
        <h1 className='mb-4 font-bold text-md md:text-lg tracking-wide '>
          {label}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-5 justify-center  relative md:left-5  '>
          <div className='text-center md:text-left'>
            <p className='mb-1 text-sm md:text-lg'>
              <span className=' text-sm md:text-lg'>Category: </span>
              <span className='font-semibold'>{category}</span>
            </p>
            <p className='mb-1 text-sm md:text-lg '>
              <span className='  text-sm md:text-lg'>Category Label:</span>{' '}
              <span className='font-semibold'>{categoryLabel}</span>
            </p>
            <p className='mb-1 text-sm md:text-lg '>
              {' '}
              <span className='  text-sm md:text-lg'>Quantity:</span>
              <span className='font-semibold'> {quantity}</span>
            </p>
            <p className='mb-1 text-sm md:text-lg '>
              {' '}
              <span className='  text-sm md:text-lg'>Calories:</span>{' '}
              <span className='font-semibold'>{calories}</span> kcal
            </p>
          </div>

          <div className='text-center md:text-left'>
            <p className='mb-1 text-sm md:text-lg'>
              {' '}
              <span className='  text-sm md:text-lg'>Protein:</span>{' '}
              <span className='font-semibold'>{protein.toFixed(1)}g</span>
            </p>
            <p className='mb-1 text-sm md:text-lg'>
              {' '}
              <span className='  text-sm md:text-lg'>Carbs:</span>{' '}
              <span className='font-semibold'>{carbs.toFixed(1)}g</span>{' '}
            </p>
            <p className='mb-1 text-sm md:text-lg'>
              {' '}
              <span className='  text-sm md:text-lg'>Fats:</span>{' '}
              <span className='font-semibold'>{fats.toFixed(1)}g</span>
            </p>
          </div>
        </div>
        <hr className='mt-5' />
        {/* Bottom Half */}
        <div className={` sm:flex w-full mt-5  ${pieCentered} `}>
          <div className=' hidden sm:inline sm:w-2/3 '>
            <div>{<Pie data={data} />}</div>
          </div>

          <div className='flex md:w-1/3  justify-center items-center '>
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
