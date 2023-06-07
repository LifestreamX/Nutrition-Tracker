'use client';

import React, { useCallback, useContext, useState } from 'react';
import FetchNutritionData from './components/foodsearch/FetchNutritionData';
import MacroGoals from './components/macrogoals/MacroGoals';
import FoodSearch from './components/foodsearch/FoodSearchButton';
import FoodLog from './components/foodlog/FoodLog';

const Dashboard = () => {
  // const [userInput, setUserInput] = useState('');
  const [val, setVal] = useState<string | number>('');
  // const { count, incrementCount } = useMyContext();

  return (
    <main className=''>
      <section className=' flex justify-center items-middle mt-5'>
        <FoodSearch val={val} setVal={setVal}>
          {/* @ts-expect-error Server Component */}
          <FetchNutritionData />
        </FoodSearch>
        {/* {count} */}
      </section>

      <section>
        {' '}
        <MacroGoals />
      </section>

      <section className='w-full flex justify-center items-center relative top-44 '>
        <FoodLog />
      </section>

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
