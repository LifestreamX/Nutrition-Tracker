import React from 'react';
import Image from 'next/image';
import aboutImageRight from '../images/about/about-right-side.jpg';
import icon1 from '../images/about/icon1.png';
import icon2 from '../images/about/icon2.png';
import icon3 from '../images/about/icon3.png';
import icon4 from '../images/about/icon4.png';

const About: React.FC = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center'>
      <div className='md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='md:text-5xl text-3xl font-bold text-center text-gray-800 dark:text-white flex flex-col my-10'>
            <div>
              <span>About</span>{' '}
              <span className='text-purple-800'>nutritiontracker</span>
            </div>

            <span className='bg-purple-800 p-0.5 w-full'></span>
          </h1>
          <p className='sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600 dark:text-gray-200 font-semibold md:text-lg'>
            nutrition tracker is an easy way to log your food intake
          </p>
          <div className='md:mt-14 mt-12 flex flex-col items-center'>
            <div
              className='w-20 h-20 bg-white shadow rounded-full flex items-center justify-center'
              role='img'
              aria-label='money'
            >
              <Image
                src={icon1}
                alt='picture of food'
                className='rounded-md h-full object-cover object-center md:block hidden'
              />
            </div>
            <p className='text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full font-semibold lg:text-lg'>
              Keep a detailed ordered log of all the dates you logged your food
            </p>
          </div>
          <div className='mt-7 flex flex-col items-center'>
            <div
              className='w-20 h-20 bg-white shadow rounded-full flex items-center justify-center'
              role='img'
              aria-label='phone'
            >
              <Image
                src={icon2}
                alt='picture of food'
                className='rounded-md h-full object-cover object-center md:block hidden'
              />
            </div>
            <p className='text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full font-semibold lg:text-lg'>
              Select a date for each log and start tracking your intake for that
              date
            </p>
          </div>
          <div className='mt-7 flex flex-col items-center'>
            <div
              className='w-20 h-20 bg-white shadow rounded-full flex items-center justify-center'
              role='img'
              aria-label='ideas'
            >
              <Image
                src={icon3}
                alt='picture of food'
                className='rounded-md h-full object-cover object-center md:block hidden'
              />
            </div>
            <p className='text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full font-semibold lg:text-lg'>
              Set macronutrient goals for each date to also track and make sure
              you are hitting your targeted goals
            </p>
          </div>
          <div className='mt-7 flex flex-col items-center'>
            <div
              className='w-20 h-20 bg-white shadow rounded-full flex items-center justify-center'
              role='img'
              aria-label='bright ideas'
            >
              <Image
                src={icon4}
                alt='picture of food'
                className='rounded-md h-full object-cover object-center md:block hidden'
              />
            </div>
            <p className='text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full font-semibold lg:text-lg'>
              Adjust your logs as needed to make sure the quantity is correct
              along with deleting any logs you do not want anymore
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className='py-12 m-10 '>
        <Image
          src={aboutImageRight}
          width={400}
          height={400}
          alt='picture of food'
          className='rounded-md h-full object-cover object-center md:block hidden'
        />
      </div>
    </div>
  );
};

export default About;
