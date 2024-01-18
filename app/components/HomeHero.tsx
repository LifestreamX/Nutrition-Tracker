import React from 'react';
import Image from 'next/image';
import heroimg from '../.././public/images/heroimg.png';
import heroimg2 from '../.././public/images/heroimg2.png';
import Link from 'next/link';
import Button from './Button';

const HomeHero: React.FC = () => {
  return (
    <section className='flex-col sm:flex-row  w-100 flex relative bottom-24 justify-evenly items-center  '>
      {/* Left side hero */}
      <div className='text-center sm:text-left dark:bg-gray-800 dark:p-12 dark:rounded-3xl'>
        <h1 className='text-4xl mb-5 font-bold lg:text-6xl'>Eat Better</h1>
        <h1 className='text-4xl mb-5 font-bold lg:text-6xl '>Live Healthier</h1>
        <h3 className='text-2xl mb-5 font-bold lg:text-3xl'>
          Track your nutriiton
        </h3>
        <Link href='/signup'>
          {' '}
          <Button color='purple' size='large'>
            {' '}
            Sign Up Now!
          </Button>
        </Link>
      </div>

      {/* Rightside Hero */}
      <div className='relative top-20 sm:top-0 '>
        <Image
          src={heroimg}
          alt='fruit-1'
          width={500}
          height={500}
          className='rounded-xl w-72 lg:w-96 relative'
          placeholder='blur'
          priority={true}
        />
        <Image
          src={heroimg2}
          alt='fruit-2'
          width={500}
          height={500}
          className='rounded-xl w-72 lg:w-96 relative top-5'
          placeholder='blur'
          priority={true}
        />
      </div>
    </section>
  );
};

export default HomeHero;
