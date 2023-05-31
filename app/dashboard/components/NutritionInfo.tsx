import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useWindowSize } from 'react-use';
import { nutritionSearchDataType } from '@/types/Food.types';

ChartJS.register(ArcElement, Tooltip, Legend);

// type Props = {
//   nutritionSearchData: {};
// };

const NutritionInfo = ({ nutritionSearchData }: any): any => {
  const { width } = useWindowSize();

  console.log(nutritionSearchData);

  useEffect(() => {
    getPercentages(
      nutritionSearchData.protein,
      nutritionSearchData.carbs,
      nutritionSearchData.fats
    );
  }, [
    nutritionSearchData.protein,
    nutritionSearchData.carbs,
    nutritionSearchData.fats,
  ]);

  const [percentages, setPercentages] = useState({
    proteinPercentage: 0,
    carbsPercentage: 0,
    fatsPercent: 0,
  });

  // function to convert into percentages
  const getPercentages = (p: number, c: number, f: number): void => {
    let total: number = p + c + f;

    let protein = p / total;
    let carbs = c / total;
    let fat = f / total;

    // Protein
    let proteinConvert = protein.toFixed(4).slice(2).split('');
    proteinConvert.splice(2, 0, '.');
    if (proteinConvert[0] === '0') {
      proteinConvert.shift();
    }

    const proteinP = +proteinConvert.join('');
    const proteinPercentage = proteinP.toFixed(1);
    const proteinNumberConvert = Number(proteinPercentage);

    // Carbs
    let carbsConvert = carbs.toFixed(4).slice(2).split('');
    carbsConvert.splice(2, 0, '.');
    if (carbsConvert[0] === '0') {
      carbsConvert.shift();
    }
    const carbP = +carbsConvert.join('');
    const carbsPercentage = carbP.toFixed(1);
    const carbsNumberConvert = Number(carbsPercentage);

    // Fats
    let fatsConvert = fat.toFixed(4).slice(2).split('');
    fatsConvert.splice(2, 0, '.');
    if (fatsConvert[0] === '0') {
      fatsConvert.shift();
    }
    const fatP = +fatsConvert.join('');
    const fatsPercentage = fatP.toFixed(1);
    const fatNumberConvert = Number(fatsPercentage);

    // setting the state
    setPercentages({
      proteinPercentage: proteinNumberConvert,
      carbsPercentage: carbsNumberConvert,
      fatsPercent: fatNumberConvert,
    });
  };

  const { protein, carbs, fats } = nutritionSearchData;

  const { proteinPercentage, carbsPercentage, fatsPercent } = percentages;

  const data = {
    labels: ['Protein', 'Net Carbs', 'Fats'],
    datasets: [
      {
        label: 'Maconutritents',

        data: [protein, carbs, fats],
        // data: [{nutritionSearchData.protein},{nutritionSearchData.carbs}, {nutritionSearchData.fats} ],
        backgroundColor: ['#44D07B', '#1CCAD7', '#EA3B04'],
        borderColor: ['#fff'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <section className='border p-5 flex flex-col  items-center  md:flex-row md:justify-evenly  '>
        <div className='mb-5 justify-center items-center h-full'>
          <Doughnut
            data={data}
            // width={width < 480 ? 180 : 200}
            width={200}

            // options={{ maintainAspectRatio: false }}
          />
        </div>
        <ul className='flex flex-col justify-center '>
          <li className='m-1 text-sm md:text-lg'>
            Protein: {protein.toFixed(1)} g{' '}
            <span style={{ color: '#44D07B' }}>({proteinPercentage}%)</span>
          </li>
          <li className='m-1 text-sm md:text-lg'>
            Net Carbs: {carbs.toFixed(1)} g{' '}
            <span style={{ color: '#1CCAD7' }}>({carbsPercentage}%)</span>
          </li>
          <li className='m-1 text-sm md:text-lg'>
            Fat: {fats.toFixed(1)} g{' '}
            <span style={{ color: '#EA3B04' }}>({fatsPercent}%)</span>
          </li>
          <button className=' w-40 mt-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>
            ADD
          </button>
        </ul>
      </section>
    </>
  );
};

export default NutritionInfo;