'use client';

import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from '../../components/Button';
import { useRouter } from 'next/navigation';
import { useWindowSize } from 'react-use';

const Login = (): JSX.Element => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { width } = useWindowSize();
  const [isValidPassword, setIsValidPassword] = useState<boolean | undefined>();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  // submit logic
  const handleLoginButton = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // At least 8 characters, at least one uppercase letter, at least one lowercase letter, and at least one digit.
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    let isValid = passwordReg.test(password);

    setIsValidPassword(isValid);

    if (isValid) {
      router.push('./dashboard');
    }
  };

  let buttonSize = width < 768 ? 'medium' : 'large';

  let buttonWidith = width < 768 ? true : '';

  console.log(isValidPassword);

  return (
    <>
      <section className='relative sm:top-32 top-28  flex flex-col justify-center items-center  '>
        <form
          onSubmit={handleLoginButton}
          className='max-w-xl shadow-2xl  ml-20 mr-20 p-10 sm:p-36 dark:bg-gray-800 flex justify-center'
        >
          <h1 className='sm:text-2xl md:text-3xl absolute top-6 font-bold '>
            Sign In
          </h1>

          <div>
            <div className='md:flex md:items-center mb-6 w-max'>
              <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/3'>
                  <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Email
                  </label>
                </div>
                <div className='md:w-2/3 '>
                  <input
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-800'
                    id='inline-full-name'
                    required
                    value={email}
                    type='email'
                    onChange={handleEmailChange}

                    // value='Jane Doe'
                  />
                </div>
              </div>
            </div>
            {/* password */}
            <div className='md:flex md:items-center mb-6 flex-col'>
              <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/3'>
                  <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Password
                  </label>
                </div>
                <div className='md:w-2/3'>
                  <input
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-800'
                    id='inline-password'
                    type='password'
                    placeholder='********'
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
            </div>
            <div className='md:flex md:items-center mb-6 flex-col'>
              <span className='flex mt-3'>{/* error would go here  */}</span>
            </div>
            {/* terms */}
            <div className='md:flex md:items-center mb-6 md:justify-center'>
              <div className=''></div>
              <label className=' block text-gray-500 font-bold '></label>
            </div>
            {/* signup submit button */}
            <div className='md:flex md:items-center  md:justify-center mb-6'>
              <button className='w-full'>
                {' '}
                <Button
                  color='purple'
                  size={buttonSize}
                  responsiveWidth={buttonWidith}
                >
                  Login
                </Button>
                {!isValidPassword && isValidPassword !== undefined && (
                  <p className='text-red-500 mt-5'>Invalid Password</p>
                )}
              </button>
            </div>
          </div>
        </form>
        <div className='absolute bottom-3'>
          <Link href='./signup'>
            Don't have a account? Create one{' '}
            <span className='text-purple-400 hover:text-purple-800'>Here</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Login;
