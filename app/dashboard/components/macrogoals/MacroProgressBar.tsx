import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { useMyContext } from '@/MyContext';
import { Goals } from '@/types/MacroTarget.types';
import { useState, useEffect } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  FoodLogTypes,
  CaloriesConsumedData,
  CaloriesRemainData,
} from '@/types/FoodLog.types';
import { BsTypeH1 } from 'react-icons/bs';

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

export const MacroProgressBar: React.FC = () => {
  const { macroTargets, setMacroTargets, foodLog } = useMyContext();
  const [progress, setProgress] = useState(0);

  const goals: Goals = {
    caloriesGoal: macroTargets.calories,
    proteinGoal: macroTargets.protein,
    carbsGoal: macroTargets.carbs,
    fatsGoal: macroTargets.fats,
  };

  const totalCalories = foodLog.reduce(
    (acc: number, cur: FoodLogTypes): number | string => {
      return acc + cur.calories * cur.quantity;
    },
    0
  );

  const totalProtein = foodLog.reduce(
    (acc: number, cur: FoodLogTypes): number | string => {
      return acc + cur.protein * cur.quantity;
    },
    0
  );

  const totalCarbs = foodLog.reduce(
    (acc: number, cur: FoodLogTypes): number | string => {
      return acc + cur.carbs * cur.quantity;
    },
    0
  );

  const totalFats = foodLog.reduce(
    (acc: number, cur: FoodLogTypes): number | string => {
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

  console.log(macroTargets);

  return (
    <section className=' bg-white rounded-lg shadow-lg p-8'>
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
        <div>
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

  console.log(macroTargets);

  const totalCalories = foodLog.reduce((acc: number, cur: FoodLogTypes) => {
    return acc + cur.calories * cur.quantity;
  }, 0);

  let caloriesRemain = macroTargets.calories - totalCalories;

  const caloriesRemainData: CaloriesRemainData = {
    labels: [],
    datasets: [
      {
        data: [caloriesRemain, totalCalories],
        backgroundColor: ['#581C87', '#E0E0DE'],
        borderColor: 'transparent', // Set the border color to transparent
      },
    ],
  };

  const noCaloriesSet: CaloriesConsumedData = {
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
    <section className='flex flex-col justify-around w-full p-5 items-center  md:flex-row  '>
      <div className='w-32 flex flex-col justify-center items-center'>
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

      <div className='w-32 flex flex-col justify-center items-center'>
        {' '}
        <h1 className='relative md:bottom-6 text-center'>Calories Consumed</h1>
        <div className='w-24 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl'>
          {totalCalories.toFixed(0)}
        </div>
      </div>
    </section>
  );
};
