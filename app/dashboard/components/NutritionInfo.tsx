import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const NutritionInfo = ({ nutritionSearchData }) => {
  const { protein, carbs, fats } = nutritionSearchData;
  const data = {
    labels: ['Protein', 'Net Carbs', 'Fats'],
    datasets: [
      {
        label: 'Maconutritents',
        data: [protein, carbs, fats],
        // data: [{nutritionSearchData.protein},{nutritionSearchData.carbs}, {nutritionSearchData.fats} ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
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
            width={100}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <ul>
          <li>Protein: {protein} g</li>
          <li>Net Carbs: {carbs} g</li>
          <li>Fat: {fats} g</li>
        </ul>
      </section>
    </>
  );
};

export default NutritionInfo;
