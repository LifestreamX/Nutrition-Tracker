import React from 'react';
import FetchNutritionData from './components/foodsearch/FetchNutritionData';
import MacroGoals from './components/macrogoals/MacroGoals';
import FoodSearch from './components/foodsearch/FoodSearchButton';
import FoodLog from './components/foodlog/FoodLog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'user dashboard with food search and macronutrients goals with detailed logs',
};

const Dashboard = () => {
  return (
    <main className='relative top-28'>
      <section className='flex justify-center items-middle '>
        <FoodSearch>
          {/* @ts-expect-error Server Component */}
          <FetchNutritionData />
        </FoodSearch>
        {/* {count} */}
      </section>

      <section>
        {' '}
        <MacroGoals />
      </section>

      {/* bottom section */}
      <section className='w-full flex justify-center items-center relative top-96 mt-40 md:mt-0  md:top-44 '>
        <FoodLog />
      </section>
    </main>
  );
};

export default Dashboard;
