import React from 'react';
import Image from 'next/image';
import homecontent from '../images/homecontent.png';
import homecontent2 from '../images/homecontent2.png';
import homecontent3 from '../images/homecontent3.png';

const HomeContent = () => {
  return (
    <section className=' flex flex-col items-center justify-center '>
      <div className='text-center mx-5'>
        <h1 className='text-3xl text-w font-bold my-2'>
          Never to late to start
        </h1>
        <p className='text-2xl'>
          Start counting your calories today. Keep track of what you eat and
          achieve your nutrition goals. We have the tools to provide you for a
          healthy liftstyle
        </p>
      </div>

      <div className='flex flex-col items-center relative top-10'>
        <div className='flex flex-col items-center my-5  bg-slate-300 border-ra '>
          <Image src={homecontent} className='w-16  ' alt='clipboard ' />
          <h1>Track all your meals</h1>
        </div>
        <div className='flex flex-col items-center  my-5 '>
          <Image src={homecontent2} className='w-16 realtive' alt='food' />
          <h1>Choose The Right Foods To Meet Your Goals</h1>
        </div>
        <div className='flex flex-col items-center my-5 '>
          <Image src={homecontent3} className='w-16' alt='motivation' />
          <h1>Keep Your Motivation Up!</h1>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
