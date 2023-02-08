import React from 'react';
import Image from 'next/image';
import homecontent from '../images/homecontent.png';
import homecontent2 from '../images/homecontent2.png';
import homecontent3 from '../images/homecontent3.png';

const HomeContent = () => {
  return (
    <section className=' flex flex-col items-center justify-center  '>
      <div className='text-center mx-5'>
        <h1 className='text-3xl text-w font-bold my-2'>
          Never to late to start
        </h1>
        <p className='text-1xl md:text-2xl  my-5 md:max-w-xl'>
          Start counting your calories today. Keep track of what you eat and
          achieve your nutrition goals. We have the tools to provide you for a
          healthy liftstyle.
        </p>
      </div>

      <div className='flex flex-col items-center relative top-10   md:flex-row lg:w-full lg:justify-evenly '>
        <div className='flex flex-col items-center my-3 rounded-full drop-shadow-xl '>
          <Image
            src={homecontent}
            className='w-16 lg:w-24  '
            alt='clipboard '
          />
          <h1 className='my-3 text-center md:w-60 font-bold lg:text-lg'>
            Track all your meals
          </h1>
        </div>
        <div className='flex flex-col items-center my-3  rounded-full drop-shadow-xl  '>
          <Image
            src={homecontent2}
            className='w-16 realtive lg:w-24 '
            alt='food'
          />
          <h1 className='my-3 font-bold text-center md:w-60 lg:text-lg'>
            Choose The Right Foods
          </h1>
        </div>
        <div className='flex flex-col items-center  my-3 rounded-full drop-shadow-xl'>
          <Image
            src={homecontent3}
            className='w-16 lg:w-24 '
            alt='motivation'
          />
          <h1 className='my-3 font-bold text-center md:w-60 lg:text-lg'>
            Keep Your Motivation Up!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
