'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useMyContext } from '@/MyContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MyDatePicker from './DatePicker';
import { CaloriesProgress, MacroProgressBar } from './MacroProgressBar';
import Button from '@/app/components/Button';

const MacroGoals = () => {
  const {
    macroTargets,
    setMacroTargets,
    setMacroTargesInputs,
    macroTargetInputs,
  } = useMyContext();
  const [showMacroForm, setShowMacroForm] = useState(false);
  const [showDateForm, setShowDateForm] = useState(false);
  const [fillOutInputWarning, setFillOutInputWarning] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFillOutInputWarning(false);
    const { name, value } = event.target;

    if (value.startsWith('0')) {
      return;
    }

    setMacroTargesInputs((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isAnyMacroInputsEmpty = Object.keys(macroTargetInputs).some(
    (key) => macroTargetInputs[key] === ''
  );

  const isMacroTargetsZero = Object.values(macroTargetInputs).some(
    (value) => value === 0
  );

  const handleSubmit = async () => {
    if (isAnyMacroInputsEmpty) {
      setFillOutInputWarning(true);
    } else if (isMacroTargetsZero) {
      setFillOutInputWarning(true);
    } else {
      const updateMacroTargets = {
        calories: macroTargetInputs.calories,
        protein: macroTargetInputs.protein,
        carbs: macroTargetInputs.carbs,
        fats: macroTargetInputs.fats,
      };

      setMacroTargets(updateMacroTargets);

      // localStorage.setItem('macroTargets', JSON.stringify(updateMacroTargets));

      setShowMacroForm(false);
      setFillOutInputWarning(false);

      try {
        const res = await fetch('/api/macrotargets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application.json',
          },
          body: JSON.stringify({ updateMacroTargets }),
        });

        await res.json();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCancel = () => {
    setMacroTargesInputs({
      ...macroTargetInputs,
    });
  };

  console.log(macroTargets);

  const macroSetButtonMessage = isMacroTargetsZero
    ? 'Set Macro Targets'
    : 'Change Macro Targets';

  return (
    <section>
      {/* Button for setting the target goals  */}
      <div className='flex items-center justify-center mt-20 flex-col mb-5'>
        {!showMacroForm && !showDateForm && (
          <div className='flex flex-col justify-center items-center md:flex-row'>
            <Button
              color='purple'
              size='medium'
              onClick={() => setShowMacroForm(true)}
            >
              {macroSetButtonMessage}
            </Button>

            <button className='mt-2 md:ml-6 0 '>
              <MyDatePicker />
            </button>
          </div>
        )}

        {/* MACRO SET */}
        <dialog
          className='relative max-w-full dark:bg-gray-900  rounded-sm'
          open={showMacroForm}
        >
          <form
            action=''
            className='mt-5 box-border   bg-white w-full  rounded-lg shadow-lg flex flex-col relative justify-center items-center dark:bg-gray-800'
          >
            {/* Warning */}

            {fillOutInputWarning && (
              <div
                className=' flex p-4 mb-4 text-sm md:text-lg text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800'
                role='alert'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 inline w-5 h-5 mr-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <div>
                  <span className='font-medium'>Fill out all inputs</span>
                </div>
              </div>
            )}

            <div className='box-border p-6'>
              <div className='flex justify-end mt-3'>
                <label htmlFor='macroCalories' className='mr-3'>
                  Calories{' '}
                </label>
                <input
                  type='number'
                  name='calories'
                  id='macroCalories'
                  value={macroTargetInputs.calories}
                  placeholder={macroTargets.calories}
                  onChange={handleInputChange}
                  className='border border-gray-300  focus:border-0 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500  dark:bg-gray-700'
                />
              </div>

              <div className='flex justify-end mt-3 '>
                <label htmlFor='macroProtein' className='mr-3'>
                  Protein
                </label>
                <input
                  type='number'
                  name='protein'
                  id='macroProtein'
                  value={macroTargetInputs.protein}
                  onChange={handleInputChange}
                  className='border border-gray-300 focus:border-0 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700'
                />
              </div>
              <div className='flex justify-end mt-3'>
                <label htmlFor='macroCarbs' className='mr-3'>
                  Carbs
                </label>
                <input
                  type='number'
                  name='carbs'
                  id='macroCarbs'
                  value={macroTargetInputs.carbs}
                  onChange={handleInputChange}
                  className='border border-gray-300 focus:border-0 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700'
                />
              </div>

              <div className='flex justify-end mt-3'>
                <label htmlFor='macroFats' className='mr-3'>
                  Fats
                </label>
                <input
                  type='number'
                  name='fats'
                  id='macroFats'
                  value={macroTargetInputs.fats}
                  onChange={handleInputChange}
                  className='border border-gray-300 focus:border-0 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700'
                />
              </div>

              <div className='flex w-full justify-around relative py-4 '>
                <Button
                  color='purple'
                  size='medium'
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Save
                </Button>

                <Button
                  color='red'
                  size='medium'
                  onClick={() => {
                    setShowMacroForm(false);
                    handleCancel();
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </dialog>

        {/* for Calories Burned / calories consumed  / calories remaining targets */}

        {!showMacroForm && (
          <section className=' w-screen xl:w-4/5 h-32  mt-10 flex flex-col items-center relative md:flex-row md:justify-evenly md:top-20 p-6 '>
            {/*  Left Side*/}
            <div className=' w-full lg:w-1/3 bg-white rounded-lg shadow-lg container '>
              <MacroProgressBar />
            </div>

            {/* Right Ride */}
            <div className=' w-full lg:w-1/3 bg-white rounded-lg shadow-lg flex justify-evenly items-center m-5  md:mt-0 container'>
              <CaloriesProgress />
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default MacroGoals;
