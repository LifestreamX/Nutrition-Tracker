'use client';

import React, { useState } from 'react';
import FoodSearch from '../components/FoodSearchButton';

const Dashboard = () => {
  // const [userInput, setUserInput] = useState('');

  return (
    <main>
      <section className=' flex justify-center items-middle mt-5'>
        <FoodSearch  />
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
