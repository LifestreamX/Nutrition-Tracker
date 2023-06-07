import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { useMyContext } from '@/MyContext';
import { Goals } from '@/types/MacroTarget.types';
import { useState } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const caloriesRemainData = {
  labels: [],
  datasets: [
    {
      label: '',

      data: [20],
      backgroundColor: ['#581C87'],
      borderColor: ['#fff'],
      borderWidth: 1,
    },
  ],
};

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

export const MacroProgressBar = () => {
  const { macroTargets, setMacroTargets } = useMyContext();
  const [progress, setProgress] = useState(0);

  const goals: Goals = {
    caloriesGoal: macroTargets.calories,
    proteinGoal: macroTargets.protein,
    carbsGoal: macroTargets.carbs,
    fatsGoal: macroTargets.fats,
  };

  console.log(macroTargets);

  return (
    <section className=' bg-white rounded-lg shadow-lg p-8'>
      <div className='mb-3'>
        <h1 className=' xxs:text-md lg:text-lg'>Macro Goals</h1>
      </div>

      <div>
        <div>
          <h2>Calories</h2>
          <ProgressBar bgColor='#808080' completed={60} />
        </div>
        <div>
          <h2>Protein</h2>
          <ProgressBar bgColor='#44D07B' completed={60} />
        </div>
        <div>
          <h2>Carbs</h2>
          <ProgressBar bgColor='#1CCAD7' completed={60} />
        </div>
        <div>
          <h2>Fats</h2>
          <ProgressBar bgColor='#EA3B04' completed={60} />
        </div>
      </div>
    </section>
  );
};

export const CaloriesProgress = () => {
  return (
    <section className='flex flex-col justify-around w-full md:flex-row p-5'>
      <div className='w-32 flex flex-col justify-center items-center'>
        {' '}
        <h1>Calories Remaining</h1>
        <Doughnut data={caloriesRemainData} options={options} />
      </div>

      <div className='w-32 flex flex-col justify-center items-center'>
        {' '}
        <h1>Calories Consumes</h1>
        <Doughnut data={caloriesConsumedData} />
      </div>
    </section>
  );
};
