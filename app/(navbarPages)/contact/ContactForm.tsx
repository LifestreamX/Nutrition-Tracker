'use client';

import React, { useState, useRef, FormEvent } from 'react';
import Button from '../../components/Button';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>();
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm(
        'service_xzzu9aa',
        'template_tx1k2l7',
        form.current,
        'VGREUHM3uBzR_I_AT'
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
    form.current.reset();
    setEmailSent(true);
  };

  return (
    <>
      {/* success message once form is submitted */}
      {emailSent === true && (
        <div
          className='  md:w-1/2 mx-auto flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400'
          role='alert'
        >
          <div className=' flex flex-col sm:flex-row w-full justify-center items-center '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6 mb-3 sm:mb-0 relative right-0 sm:right-3 '
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 12.75l6 6 9-13.5'
              />
            </svg>

            <div className=' text-center sm:text-left container'>
              <span className='font-medium '>Email Sent!</span> I will get back
              to as soon as possible!
            </div>
          </div>
        </div>
      )}

      {/* form  */}
      {emailSent === false && (
        <form
          ref={form as React.RefObject<HTMLFormElement>}
          onSubmit={sendEmail}
          className='lg:w-1/2 md:w-2/3 mx-auto '
        >
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label className=' leading-7 text-sm text-gray-600 dark:text-gray-200'>
                  Name
                </label>
                <input
                  required
                  type='text'
                  name='from_name'
                  className='w-full bg-gray-100 rounded border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label className='leading-7 text-sm text-gray-600 dark:text-gray-200'>
                  Email
                </label>
                <input
                  required
                  type='email'
                  name='email'
                  className='w-full bg-gray-100 rounded border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div className='p-2 w-full'>
              <div className='relative'>
                <label className='leading-7 text-sm text-gray-600 dark:text-gray-200'>
                  Message
                </label>
                <textarea
                  required
                  name='message'
                  className='w-full bg-gray-100 rounded border border-gray-300 focus:border-purple-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                ></textarea>
              </div>
            </div>
            <div className='p-2 w-full'>
              <div className='flex mx-auto w-full justify-center'>
                <Button
                  color='purple'
                  size='large'
                  type='submit'
                  responsiveWidth
                >
                  Send
                </Button>
              </div>
            </div>
            <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center dark:text-gray-400'>
              <p>tylerallen@live.com</p>

              <p className='leading-normal my-5 dark:text-gray-400'>
                Boston, MA
              </p>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactForm;
