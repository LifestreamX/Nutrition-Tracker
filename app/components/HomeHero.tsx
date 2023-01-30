import React from 'react';
import Image from 'next/image';
import heroimg from '../images/heroimg.png';
import heroimg2 from '../images/heroimg2.png';

const HomeHero = () => {
  return (
    <section className='flex-col sm:flex-row  w-100 flex relative bottom-24 justify-evenly items-center '>
      {/* Left side hero */}
      <div className='text-center sm:text-left'>
        <h1 className='text-4xl mb-5 font-bold lg:text-6xl'>Eat Better</h1>
        <h1 className='text-4xl mb-5 font-bold lg:text-6xl '>Live Healthier</h1>
        <h3 className='text-2xl mb-5 font-bold lg:text-3xl'>
          Track your nutriiton
        </h3>
        <button
          type='button'
          className='text-1xl lg:text-3xl font-bold focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg  px-6 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
        >
          Sign Up Now!
        </button>
      </div>

      {/* Rightside Hero */}
      <div className='relative top-20 sm:top-0'>
        <Image
          src={heroimg}
          alt='fruit'
          className='rounded-xl w-72 lg:w-96 relative'
        />
        <Image
          src={heroimg2}
          alt='fruit'
          className='rounded-xl w-72 lg:w-96 relative top-5'
        />
      </div>
    </section>
  );
};

export default HomeHero;
