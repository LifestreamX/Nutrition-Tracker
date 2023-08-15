'use client';

import React, { useState } from 'react';
import FetchNutritionData from './components/foodsearch/FetchNutritionData';
import MacroGoals from './components/macrogoals/MacroGoals';
import FoodSearch from './components/foodsearch/FoodSearchButton';
import FoodLog from './components/foodlog/FoodLog';

const Dashboard = () => {
  const [val, setVal] = useState<string | number>('');

  return (
    <main>
      <section className=' flex justify-center items-middle mt-5 '>
        <FoodSearch val={val} setVal={setVal}>
          {/* @ts-expect-error Server Component */}
          <FetchNutritionData />
        </FoodSearch>
        {/* {count} */}
      </section>

      <MacroGoals />
      <section></section>

      {/* bottom section */}
      <section className='w-full flex justify-center items-center relative top-96 mt-40 md:mt-0  md:top-44 '>
        <FoodLog />
      </section>
    </main>
  );
};

export default Dashboard;
