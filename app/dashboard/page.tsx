'use client';

import React, { useState } from 'react';
import FoodSearch from './components/FoodSearchButton';
import FetchNutritionData from './components/FetchNutritionData';

const Dashboard = () => {
  // const [userInput, setUserInput] = useState('');
  const [val, setVal] = useState<string | number>('');

  return (
    <main>
      <section className=' flex justify-center items-middle mt-5'>
        <FoodSearch val={val} setVal={setVal}>
          {/* @ts-expect-error Server Component */}
          <FetchNutritionData />
        </FoodSearch>
      </section>

      {/* Table for nutrition added added*/}
      {/* With caloies and sizes */}
      <section></section>

      {/* */}
      <section>
        {/* Left side */}
        <div>
          {/* Calories Consumes */}
          {/* Calories Burned */}
        </div>

        {/* Right side  */}
        <div>
          {/*  Protein */}
          {/*  Carbs */}
          {/* Fat */}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
