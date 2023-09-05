import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { useMyContext } from '@/MyContext';
import { Goals } from '@/types/MacroTarget.types';
import { useState, useEffect } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FoodLogTypes } from '@/types/FoodLog.types';
import { BsTypeH1 } from 'react-icons/bs';
import {
  CaloriesConsumedData,
  CaloriesRemainData,
} from '@/types/MacroTarget.types';

ChartJS.register(ArcElement, Tooltip, Legend);

const caloriesConsumedData = {
  labels: [],
  datasets: [
    {
      label: '',

      data: [20],
      backgroundColor: ['#FFA500'],
      borderColor: ['#fff'],
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  width: 100, // Set the desired width here
};

// macro progress bar component
export const MacroProgressBar: React.FC = () => {
  const { macroTargets, setMacroTargets, foodLog } = useMyContext();
  const [progress, setProgress] = useState(0);

  const goals: Goals | any = {
    caloriesGoal: macroTargets.calories,
    proteinGoal: macroTargets.protein,
    carbsGoal: macroTargets.carbs,
    fatsGoal: macroTargets.fats,
  };

  const totalCalories: any = foodLog.reduce(
    (acc: number, cur: FoodLogTypes | any): number | string => {
      return acc + cur.calories * cur.quantity;
    },
    0
  );

  const totalProtein: any = foodLog.reduce(
    (acc: number, cur: FoodLogTypes | any): number | string => {
      return acc + cur.protein * cur.quantity;
    },
    0
  );

  const totalCarbs: any = foodLog.reduce(
    (acc: number, cur: FoodLogTypes | any): number | string => {
      return acc + cur.carbs * cur.quantity;
    },
    0
  );

  const totalFats: any = foodLog.reduce(
    (acc: number, cur: FoodLogTypes | any): number | string => {
      return acc + cur.fats * cur.quantity;
    },
    0
  );

  const totalCaloriesPercentage = (totalCalories / goals.caloriesGoal) * 100;
  const totalProteinPercentage = (totalProtein / goals.proteinGoal) * 100;
  const totalCarbsPercentage = (totalCarbs / goals.carbsGoal) * 100;
  const totalFatsPercentage = (totalFats / goals.fatsGoal) * 100;

  const isMacroTargetsEmpty =
    (foodLog.length === 0 && Object.keys(macroTargets).length === 0) ||
    macroTargets.calories === '';

  return (
    <section className=' bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800  '>
      {isMacroTargetsEmpty ? (
        <div>
          <div className='mb-3'>
            <h1 className=' xxs:text-md lg:text-lg'>Set Macro Goals</h1>
          </div>

          <div>
            <h2>Calories</h2>
            <ProgressBar
              bgColor='#808080'
              completed={0}
              height='20px'
              className='flex items-center justify-center'
            />
          </div>
          <div>
            <h2>Protein</h2>
            <ProgressBar bgColor='#808080' completed={0} height='20px' />
          </div>
          <div>
            <h2>Carbs</h2>
            <ProgressBar bgColor='#808080' completed={0} height='20px' />
          </div>
          <div>
            <h2>Fats</h2>
            <ProgressBar bgColor='#808080' completed={0} height='20px' />
          </div>
        </div>
      ) : (
        <div className='w-full'>
          <div className='mb-3'>
            <h1 className=' xxs:text-md lg:text-lg'>Macro Goals </h1>
          </div>
          <div>
            <h2>% Calories</h2>
            <ProgressBar
              bgColor='#808080'
              completed={`${totalCaloriesPercentage.toFixed(0)}`}
              height='20px'
              className='flex items-center justify-center'
            />
          </div>
          <div>
            <h2>% Protein </h2>

            <ProgressBar
              bgColor='#44D07B'
              completed={`${totalProteinPercentage.toFixed(0)}`}
              height='20px'
            />
          </div>
          <div>
            <h2>% Carbs </h2>
            <ProgressBar
              bgColor='#1CCAD7'
              completed={`${totalCarbsPercentage.toFixed(0)}`}
              height='20px'
            />
          </div>
          <div>
            <h2>% Fats</h2>
            <ProgressBar
              bgColor='#EA3B04'
              completed={`${totalFatsPercentage.toFixed(0)}`}
              height='20px'
            />
          </div>
        </div>
      )}
    </section>
  );
};

export const CaloriesProgress = () => {
  const { macroTargets, setMacroTargets, foodLog } = useMyContext();

  const totalCalories: any = foodLog.reduce(
    (acc: number, cur: FoodLogTypes | any) => {
      return acc + cur.calories * cur.quantity;
    },
    0
  );

  let caloriesRemain = macroTargets.calories - totalCalories;

  let totalCaloriesFixed = totalCalories.toFixed(0);
  let caloriesRemainFixed = caloriesRemain.toFixed(0);

  const caloriesRemainData: CaloriesRemainData | any = {
    labels: [],
    datasets: [
      {
        data: [caloriesRemainFixed, totalCaloriesFixed],
        backgroundColor: ['#581C87', '#E0E0DE'],
        borderColor: 'transparent', // Set the border color to transparent
      },
    ],
  };

  const noCaloriesSet: CaloriesConsumedData | any = {
    labels: [],
    datasets: [
      {
        data: ['100'],
        backgroundColor: ['gray'],
        borderColor: ['gray', 'gray'],
        borderWidth: 1,
      },
    ],
  };

  const caloriesReached: CaloriesRemainData = {
    labels: [],
    datasets: [
      {
        data: [caloriesRemain],
        backgroundColor: ['#fff'],
        borderColor: ['gray'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className='flex flex-col justify-around w-full p-5 items-center  md:flex-row   dark:bg-gray-800 '>
      <div className='w-32 flex flex-col justify-center items-center '>
        {' '}
        {caloriesRemain === 0 ||
        caloriesRemain === null ||
        Number.isNaN(caloriesRemain) ? (
          <>
            <h1>Set Calories Goal</h1>
            <Doughnut data={noCaloriesSet} options={options} />
          </>
        ) : (
          <>
            {caloriesRemain < 0 ? (
              <>
                <h1>Calories Reached</h1>
                <Doughnut data={caloriesReached} options={options} />
              </>
            ) : (
              <>
                <h1 className='text-center'>Calories Remaining</h1>
                <p className=''>{caloriesRemain.toFixed(0)}</p>

                <Doughnut data={caloriesRemainData} options={options} />
              </>
            )}
          </>
        )}
      </div>

      <div className=' flex flex-col justify-center items-center container'>
        {' '}
        <h1 className='relative md:bottom-6 text-center mt-6 md:mt-0 mb-4 md:mb-0 '>
          Calories Consumed
        </h1>
        <div className='w-30 overflow-auto h-16 rounded-full p-2  bg-orange-500 flex items-center justify-center text-white text-2xl'>
          <p className='m-1'>{totalCalories.toFixed(0)}</p>
        </div>
      </div>
    </section>
  );
};
