import React from 'react';
import Image from 'next/image';
import aboutImageRight from '/public/images/about/about-right-side.jpg';
import icon1 from '/public/images/about/icon1.png';
import icon2 from '/public/images/about/icon2.png';
import icon3 from '/public/images/about/icon3.png';
import icon4 from '/public/images/about/icon4.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const About: React.FC = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center   dark:rounded-3xl  '>
        <div className=' md:mt-28   md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28 relative bottom-20 md:bottom-0 '>
          <div className='flex flex-col items-center justify-center '>
            <h1 className='md:text-5xl text-3xl font-bold text-center text-gray-800 dark:text-white flex flex-col mb-10 px-2'>
              <div className='flex flex-wrap'>
                <span className='m-1'>About</span>{' '}
                <span className=' m-1'>nutritiontracker</span>
              </div>
              <span className='bg-gray-500 p-0.5 w-full'></span>
            </h1>

            <section className='px-4'>
              <p className='sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600 dark:text-gray-200 font-semibold md:text-lg'>
                Nutritiontracker is an easy way to log your food intake
              </p>
              <div className='md:mt-14 mt-12 flex flex-col items-center'>
                <div
                  className='w-20 h-20 bg-white shadow rounded-full flex items-center justify-center'
                  role='img'
                  aria-label='money'
                >
                  <Image
                    src={icon1}
                    placeholder='blur'
                    alt='picture of food'
                    className='rounded-md h-full object-cover object-center md:block '
                    priority={true}
                  />
                </div>
                <p className='text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full font-semibold lg:text-lg'>
                  Keep a detailed ordered log of all your food by date
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
                    placeholder='blur'
                    alt='picture of food'
                    className='rounded-md h-full object-cover object-center md:block '
                    priority={true}
                  />
                </div>
                <p className='text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full font-semibold lg:text-lg'>
                  Select a date for each log and start tracking your intake
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
                    placeholder='blur'
                    alt='picture of food'
                    className='rounded-md h-full object-cover object-center md:block '
                    priority={true}
                  />
                </div>
                <p className='text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full font-semibold lg:text-lg'>
                  Set macronutrient goals for each date to also track and make
                  sure you are hitting your targeted goals
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
                    placeholder='blur'
                    alt='picture of food'
                    className='rounded-md h-full object-cover object-center md:block '
                    priority={true}
                  />
                </div>
                <p className='text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full font-semibold lg:text-lg'>
                  Adjust your logs as needed to make sure the quantity is
                  correct along with deleting any logs you do not want anymore
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Right Side */}

        <div className='py-12 relative top-60  m-12 w-[400px]'>
          <Image
            src={aboutImageRight}
            placeholder='blur'
            alt='picture of food'
            className='rounded-md  object-cover object-center md:block hidden'
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

export default About;
