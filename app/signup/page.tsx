'use client';

import Link from 'next/link';
import React, { use, useState } from 'react';
import Button from '../components/Button';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState();
  const [isTermsLinkedClicked, setIsTermsLinkedClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // submit logic
  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    // At least 8 characters, at least one uppercase letter, at least one lowercase letter, and at least one digit.
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    let isValid = passwordReg.test(password);

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
    }

    if (password === confirmPassword) {
      setPasswordMatch(true);
    }

    // if (password !== confirmPassword || password.length   ) {
    //   console.log('Not Matching');
    // }
  };

  // terms logic
  let likedClicked = false;

  const handleLinkClick = () => {
    setIsTermsLinkedClicked(true);
  };

  let termsDisabled = isTermsLinkedClicked === false && true;

  const handleCheckBoxChange = (e) => {
    setIsChecked(e.target.value);
  };

  // input warnings

  return (
    <div className='relative sm:top-32 top-20  flex flex-col justify-center items-center  '>
      <h1 className='sm:text-2xl md:text-3xl relative top-2 sm:top-24 font-bold '>
        Create Your Account{' '}
      </h1>
      <form
        onSubmit={handleSignUpSubmit}
        className='max-w-xl shadow-2xl  ml-20 mr-20 p-10 sm:p-36'
      >
        <div className='md:flex md:items-center mb-6 w-max'>
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
        {/* password */}
        <div className='md:flex md:items-center mb-6'>
          <div>
            {!passwordMatch && (
              <p className='text-red-500 font-semibold'>
                Passwords do not match
              </p>
            )}
          </div>

          <div>
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
        <div className='md:flex md:items-center mb-6'>
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
              I agree to our{' '}
              <strong className='text-purple-800 hover:cursor-pointer'>
                <Link href='/terms' target='_blank' onClick={handleLinkClick}>
                  Terms of Service
                </Link>
              </strong>
            </span>
          </label>
        </div>
        {/* signup submit button */}
        <div className='md:flex md:items-center  md:justify-center '>
          <div className=''></div>
          <div className=''>
            <button>
              {' '}
              <Button color='purple' size='large'>
                Sign up
              </Button>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
