import React, { useState, useRef, FormEvent } from 'react';
import Button from '../../components/Button';
import emailjs from '@emailjs/browser';
import { useMyContext } from '@/MyContext';
import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return (
    <>
      <section className='text-gray-700 body-font relative md:top-14'>
        <div className='container px-5 py-24 mx-auto dark:bg-gray-800 dark:mt-20 dark:mb-10 dark:rounded-3xl'>
          <div className='flex flex-col text-center w-full mb-12 '>
            <h1 className=' dark:bg-gray-800 sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white'>
              Contact Me
            </h1>
            <p className='lg:w-2/3 mx-auto dark:text-gray-200  '>
              Send me an email if you have any questions or suggestions about my
              nutrition tracker application
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
