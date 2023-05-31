'use client';

import React, { useCallback, useContext, useState } from 'react';
import FoodSearch from './components/FoodSearchButton';
import FetchNutritionData from './components/FetchNutritionData';
import MacroGoals from './components/MacroGoals';

const Dashboard = () => {
  // const [userInput, setUserInput] = useState('');
  const [val, setVal] = useState<string | number>('');
  // const { count, incrementCount } = useMyContext();

  return (
    <main>
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
