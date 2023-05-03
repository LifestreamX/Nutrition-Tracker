import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const NutritionInfo = ({ nutritionSearchData }) => {
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

  const [percentages, setPercentages] = useState<object>({
    proteinPercentage: 0,
    carbsPercentage: 0,
    fatsPercent: 0,
  });

  // console.log(nutritionSearchData);

  const getPercentages = (p: number, c: number, f: number): any => {
    let total: number = p + c + f;

    let protein = p / total;
    let carbs = c / total;
    let fat = f / total;

    // Protein
    let proteinConvert = protein.toFixed(4).slice(2).split('');
    proteinConvert.splice(2, 0, '.');
    if (proteinConvert[0] == 0) {
      proteinConvert.shift();
    }
    const proteinPercentage = proteinConvert.join('');
    // Carbs
    let carbsConvert = carbs.toFixed(4).slice(2).split('');
    carbsConvert.splice(2, 0, '.');
    if (carbsConvert[0] == 0) {
      carbsConvert.shift();
    }
    const carbsPercentage = carbsConvert.join('');
    // Fats
    let fatsConvert = fat.toFixed(4).slice(2).split('');
    fatsConvert.splice(2, 0, '.');
    if (fatsConvert[0] == 0) {
      fatsConvert.shift();
    }
    const fatsPercentage = fatsConvert.join('');

    setPercentages({
      proteinPercentage: proteinPercentage,
      carbsPercentage: carbsPercentage,
      fatsPercent: fats,
    });

    console.log(percentages);
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
      <section className='border p-5 flex justify-evenly '>
        <div>
          <Doughnut
            data={data}
            // width={100}
            // options={{ maintainAspectRatio: false }}
          />
        </div>
        <ul className='flex flex-col justify-center'>
          <li className='m-1'>
            Protein: {protein} g{' '}
            <span style={{ color: '#44D07B' }}>({proteinPercentage}%)</span>
          </li>
          <li className='m-1'>
            Net Carbs: {carbs} g{' '}
            <span style={{ color: '#1CCAD7' }}>({carbsPercentage}%)</span>
          </li>
          <li className='m-1'>
            Fat: {fats} g{' '}
            <span style={{ color: '#EA3B04' }}>({fatsPercent}%)</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default NutritionInfo;
