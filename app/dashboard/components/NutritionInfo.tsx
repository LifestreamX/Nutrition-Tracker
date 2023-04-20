import React from 'react';

const NutritionInfo = ({ nutritionSearchData }) => {
  return (
    <>
      <main className='border p-5'>
        <ul>
          <li>Protein: {nutritionSearchData.protein}</li>
          <li>Net Carbs: {nutritionSearchData.carbs}</li>
          <li>Fat: {nutritionSearchData.fats}</li>
        </ul>
      </main>
    </>
  );
};

export default NutritionInfo;
