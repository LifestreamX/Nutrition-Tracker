'use client';

import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from '../../components/Button';
import { useWindowSize } from 'react-use';
import { Metadata } from 'next';


const SignUpForm = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean | undefined>();
  const [isTermsLinkedClicked, setIsTermsLinkedClicked] = useState<
    boolean | undefined
  >();
  const [termsDisabled, setTermsDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [successfullyRegistered, setSuccessfullyRegistered] =
    useState<boolean>(false);
  const { width } = useWindowSize();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  // submit logic
  const handleSignUpSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // At least 8 characters, at least one uppercase letter, at least one lowercase letter, and at least one digit.
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    let isValid = passwordReg.test(password);

    setIsValidPassword(isValid);

    if (password !== confirmPassword) {
      console.log('PASSWORDS MUST MATCH');
      setPasswordMatch(false);
    } else if (!isValid) {
      console.log(
        'At least 8 characters, at least one uppercase letter, at least one lowercase letter, and at least one digit '
      );
    } else if (isChecked === false) {
      console.log('please Agree to the terms of service ');
    } else {
      setSuccessfullyRegistered(true);
    }

    if (password === confirmPassword) {
      setPasswordMatch(true);
    }

    if (isTermsLinkedClicked === undefined) {
      setIsTermsLinkedClicked(false);
    }
  };

  // terms logic
  const handleLinkClick = (): void => {
    setIsTermsLinkedClicked(true);
    setTermsDisabled(false);
  };

  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === 'on') {
      setIsChecked(true);
    }
  };

  let buttonSize = width < 768 ? 'medium' : 'large';

  let buttonWidith = width < 768 ? true : '';

  return (
    <>
        <h1 className='sm:text-2xl md:text-3xl relative top-2 sm:top-24 font-bold '>
          {successfullyRegistered ? (
            <p className='text-purple-800'>Successfully Registered</p>
          ) : (
            <p>Create Your Account </p>
          )}
        </h1>
        <form
          onSubmit={handleSignUpSubmit}
          className='max-w-xl shadow-2xl  ml-20 mr-20 p-10 sm:p-36 dark:bg-gray-800'
        >
          {successfullyRegistered ? (
            <div>
              <p className='text-center'>
                {' '}
                Thank you for registering with nutritiontracker!{' '}
              </p>
            </div>
          ) : (
            <>
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
              {/* confirm password */}
              <div className='md:flex md:items-center mb-6 flex-col'>
                <div className='flex flex-col md:flex-row'>
                  <div className='md:w-1/3'>
                    <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                      Confirm Password
                    </label>
                  </div>
                  <div className='md:w-2/3'>
                    <input
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-800'
                      id='inline-password'
                      type='password'
                      placeholder='********'
                      required
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </div>
                </div>
                <span className='flex mt-3'>
                  {!passwordMatch && (
                    <p className='text-red-500 '>Passwords do not match</p>
                  )}
                  {!isValidPassword &&
                    isValidPassword !== undefined &&
                    passwordMatch && (
                      <p className='text-red-500 '>
                        Your password must contain atleast 8 characters, at
                        least one uppercase letter, at least one lowercase
                        letter, and at least one digit{' '}
                      </p>
                    )}

                  {/* if terms isnt clicked yet */}
                  {!isTermsLinkedClicked &&
                    isTermsLinkedClicked !== undefined &&
                    passwordMatch !== false &&
                    isValidPassword === true && (
                      <p className='text-red-500 '>
                        Please review the terms of service
                      </p>
                    )}

                  {/* if terms checkbox is clicked but not viewed  */}
                  {}
                </span>
              </div>
              {/* terms */}
              <div className='md:flex md:items-center mb-6 md:justify-center'>
                <div className=''></div>
                <label className=' block text-gray-500 font-bold '>
                  <input
                    className='mr-2 leading-tight accent-purple-600'
                    type='checkbox'
                    disabled={termsDisabled}
                    checked={isChecked}
                    onChange={handleCheckBoxChange}
                  />
                  <span className='text-sm'>
                    I agree to the{' '}
                    <strong className='text-purple-800 hover:cursor-pointer dark:text-purple-400 dark:hover:text-purple-500'>
                      <Link
                        href='/terms'
                        target='_blank'
                        onClick={handleLinkClick}
                      >
                        Terms of Service
                      </Link>
                    </strong>
                  </span>
                </label>
              </div>
              {/* signup submit button */}
              <div className=' flex items-center  justify-center   '>
                <div>
                  {' '}
                  <Button
                    color='purple'
                    size={buttonSize}
                    responsiveWidth={buttonWidith}
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </>
          )}
        </form>
        <div className='absolute bottom-1'>
          {successfullyRegistered ? (
            <Link href='./dashboard'>
              Go to
              <span className='text-purple-600 font-medium hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-500'>
                {' '}
                Dashboard
              </span>
            </Link>
          ) : (
            <Link
              href='./login'
              className='text-purple-400 hover:text-purple-800 '
            >
              <p className='relative bottom-5'>Already have an account?</p>
            </Link>
          )}
        </div>
    </>
  );
};

export default SignUpForm;
