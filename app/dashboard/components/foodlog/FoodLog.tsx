import { useMyContext } from '@/MyContext';
import { FoodLogTypes } from '@/types/FoodLog.types';
import React, { useState, useReducer, useEffect } from 'react';
import Food from './Food';
import Button from '@/app/components/Button';
import uniqid from 'uniqid';

interface State {
  foodLogSubmittedSuccess: boolean;
  isDateNotSelected: boolean;
  isMacroTargetsSet: boolean;
  macrosSet: boolean;
}

type Action =
  | { type: 'SET_FOOD_LOG_SUBMITTED_SUCCESS'; payload: boolean }
  | { type: 'SET_IS_DATE_NOT_SELECTED'; payload: boolean }
  | { type: 'SET_IS_MACRO_TARGETS_SET'; payload: boolean }
  | { type: 'SET_MACROS_SET'; payload: boolean };

const initialState: State = {
  foodLogSubmittedSuccess: false,
  isDateNotSelected: false,
  isMacroTargetsSet: false,
  macrosSet: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FOOD_LOG_SUBMITTED_SUCCESS':
      return {
        ...state,
        foodLogSubmittedSuccess: action.payload,
      };
    case 'SET_IS_DATE_NOT_SELECTED':
      return {
        ...state,
        isDateNotSelected: action.payload,
      };
    case 'SET_IS_MACRO_TARGETS_SET':
      return {
        ...state,
        isMacroTargetsSet: action.payload,
      };
    case 'SET_MACROS_SET':
      return {
        ...state,
        macrosSet: action.payload,
      };
    default:
      return state;
  }
};

const FoodLog = () => {
  const {
    foodLog,
    selectedDate,
    setSelectedDate,
    dispatch,
    setFoodLog,
    macroTargets,
    setMacroTargets,
    submittedFoodLogs,
  } = useMyContext();

  const [state, dispatchState] = useReducer(reducer, initialState);
  const [foodLogWrapper, setFoodLogWrapper] = useState({});

  // const [foodLogSubmittedSuccess, setFoodLogSubmittedSuccess] = useState(false);
  // const [isDateNotSelected, setIsDateNotSelected] = useState(false);
  // const [isMacroTargetsSet, setIsMacroTargetsSet] = useState(false);
  // const [macrosSet, setMacrosSet] = useState(false);

  const isMacroTargetsEmpty = (value: string) => {
    return value === '';
  };

  // const handleFoodLogSubmit = (): void => {
  //   if (selectedDate === null) {
  //     setIsDateNotSelected(true);
  //     setTimeout(() => {
  //       setIsDateNotSelected(false);
  //     }, 3000);
  //   } else if (isMacroTargetsEmpty(macroTargets.calories)) {
  //     setIsMacroTargetsSet(true);
  //     setTimeout(() => {
  //       setIsMacroTargetsSet(false);
  //     }, 3000);
  //   } else {
  //     dispatch({ type: 'SUBMIT_FOOD_LOGS', payload: foodLog });
  //     setFoodLogSubmittedSuccess(true);
  //     setFoodLog([]);
  //     setSelectedDate(null);
  //     setMacrosSet(false);
  //   }
  // };

  const handleFoodLogSubmit = (): void => {
    if (selectedDate === null) {
      dispatchState({ type: 'SET_IS_DATE_NOT_SELECTED', payload: true });
      setTimeout(() => {
        dispatchState({ type: 'SET_IS_DATE_NOT_SELECTED', payload: false });
      }, 3000);
    } else if (isMacroTargetsEmpty(macroTargets.calories)) {
      dispatchState({ type: 'SET_IS_MACRO_TARGETS_SET', payload: true });
      setTimeout(() => {
        dispatchState({ type: 'SET_IS_MACRO_TARGETS_SET', payload: false });
      }, 3000);
    } else {
      dispatch({
        type: 'SUBMIT_FOOD_LOGS',
        payload: { foodLogId: uniqid(), selectedDate, foodLog },
      });

      dispatchState({
        type: 'SET_FOOD_LOG_SUBMITTED_SUCCESS',
        payload: true,
      });
      setFoodLogWrapper({});
      setFoodLog([]);
      dispatchState({ type: 'SET_MACROS_SET', payload: false });
      setSelectedDate(null);
      setMacroTargets({});
      setSelectedDate(null);
    }
  };


  return (
    <div className='bg-white rounded-lg shadow-lg w-5/6 p-10 '>
      <p className=''>{selectedDate}</p>
      {foodLog?.length === 0 ? (
        state.foodLogSubmittedSuccess &&
        Object.keys(macroTargets).length === 0 &&
        selectedDate === null ? (
          <div className='flex justify-center items-center'>
            <h1 className='flex items-center text-center text-2xl'>
              <svg
                className='h-8 w-8 text-green-500 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span className='text-green-500'>
                {' '}
                {selectedDate?.formattedDate} Food Log Submitted
              </span>
            </h1>
          </div>
        ) : (
          <h1 className='text-center text-2xl'> Food Log Is Empty</h1>
        )
      ) : (
        <div className='relative  p-4 grid grid-cols-1 gap-4 justify-center items-center text-center'>
          <p className=' '>
            {/* {selectedDate !== null && selectedDate.formattedDate}{' '} */}
          </p>
          {foodLog?.map((food: FoodLogTypes) => (
            <Food key={food.foodId} food={food} />
          ))}

          <div className='relative'>
            {state.isMacroTargetsSet && (
              <div className='relative bottom-10'>
                <div
                  className='  w-full absolute flex justify-center items-center p-4 mb-4 text-md text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'
                  role='alert'
                >
                  <span className='relative right-3 font-medium text-lg'>
                    Macros Not Selected!
                  </span>{' '}
                  Please select your macro targets
                </div>
              </div>
            )}
            {state.isDateNotSelected && (
              <div className='relative bottom-10'>
                <div
                  className='  w-full absolute flex justify-center items-center p-4 mb-4 text-md text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'
                  role='alert'
                >
                  <span className='relative right-3 font-medium text-lg'>
                    Date Not Selected!
                  </span>{' '}
                  Please select a date
                </div>
              </div>
            )}
          </div>
          <div className='mt-5'>
            {foodLog.length > 0 && (
              <Button
                color='purple'
                size='medium'
                responsiveWidth={true}
                onClick={handleFoodLogSubmit}
              >
                Submit Food Log
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodLog;
