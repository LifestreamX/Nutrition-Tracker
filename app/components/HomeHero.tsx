import React from 'react';
import Image from "next/legacy/image";
import heroimg from '../images/heroimg.png';
import heroimg2 from '../images/heroimg2.png';
import Link from 'next/link';
import Button from './Button';

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
        <Button color='purple' size='large'>
          <Link href='/signup'> Sign Up Now!</Link>
        </Button>
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
