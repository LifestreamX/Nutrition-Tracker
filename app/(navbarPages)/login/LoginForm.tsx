'use client';

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Button from '../../components/Button';
import { useRouter } from 'next/navigation';
import { useWindowSize } from 'react-use';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

const LoginForm = (): JSX.Element => {
  const { status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { width } = useWindowSize();
  const [isValidPassword, setIsValidPassword] = useState<boolean | undefined>();
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  // submit logic
  const handleLoginButton = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage('Signing In...');

    try {
      // Sign in using the credentials provider
      const signInResponse = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      // Check if the sign-in response is successful
      if (!signInResponse || signInResponse.ok !== true) {
        setMessage('Invalid Email Or Password');
      } else {
        // Refresh the router to reflect the updated authentication status
        location.reload();

        router.refresh();
      }
    } catch (err) {
      // Log any errors that occur during sign-in
      console.error('Login error:', err);
    }

    // setMessage(message);
  };

  useEffect(() => {
    if (status === 'authenticated') {
      // If authenticated, redirect to the dashboard
      router.refresh();

      router.push('/dashboard');
    }
  }, [status]);

  console.log(status);

  let buttonSize = width < 768 ? 'medium' : 'large';

  let buttonWidith = width < 768 ? true : '';

  let messageColor =
    message === 'Signing In...' ? 'text-black' : 'text-red-600';

  return (
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
              <label
                htmlFor='inline-full-name'
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              >
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
              />
            </div>
          </div>
        </div>
        {/* password */}
        <div className='md:flex md:items-center mb-6 flex-col'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/3'>
              <label
                htmlFor='inline-password'
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              >
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
          <div className={`relative top-8 ${messageColor}`}>{message}</div>
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
        <div className='md:flex md:items-center  md:justify-center mb-6 flex flex-col'>
          {' '}
          <Button
            color='purple'
            size={buttonSize}
            responsiveWidth={buttonWidith}
            type='submit'
          >
            Login
          </Button>
          {!isValidPassword && isValidPassword !== undefined && (
            <p className='text-red-500 mt-5 text-center'>Invalid Password</p>
          )}
        </div>
        <div className=' absolute text-sm md:text-lg md:bottom-2'>
          <Link href='./signup'>
            Don't have a account? Create one{' '}
            <span className='text-purple-400 hover:text-purple-800'>Here</span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
