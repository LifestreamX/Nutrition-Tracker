'use client';

import { useState, useEffect } from 'react';
import ConfirmDelete from './ConfirmDelete';
import { FoodTypeData } from '@/types/Food.types';
import Button from '@/app/components/Button';
import { FoodLogTypes } from '@/types/FoodLog.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import HoverFoodLogItemData from './HoverFoodLogItemData';
import { useMyContext } from '@/MyContext';

interface FoodDataProps {
  food: FoodTypeData;
}

const Food = ({ food }: FoodDataProps) => {
  const {
    foodLog,
    setFoodLog,
    foodItem,
    setFoodItem,
    clikedEditId,
    setClikedEditId,
  } = useMyContext();
  const [hoverItemId, setHoverItemId] = useState<string | null>(null);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [newQuantity, setNewQuantity] = useState<
    number | ChangeEvent<HTMLInputElement> | null
  >(null);
  const [emptyQuantityWarning, setEmptyQuantityWarning] = useState(false);
  const [delayRender, setDelayedRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {});
    setFoodItem(food);

    let timeoutId: NodeJS.Timeout;

    if (hoverItemId) {
      timeoutId = setTimeout(() => {
        setDelayedRender(true);
      }, 500); // Delay of 2 seconds (2000 milliseconds)
    } else {
      setDelayedRender(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [hoverItemId]);

  const handleMouseEnterd = (foodId: string): void => {
    setHoverItemId(foodId);
  };

  const handleMouseLeaving = (): void => {
    setHoverItemId(null);
  };

  const handleFoodItemDelete = (id: string): void => {
    setFoodLog((prevFood) => prevFood.filter((food) => food?.foodId !== id));
  };

  const handleQuantity = (id: string): void => {
    setNewQuantity(food.quantity);
    setClikedEditId(id);
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewQuantity(e.target.value);
  };

  const handleQuantitySave = (id: string) => {
    newQuantity == null ||
      newQuantity.trim() === '' ||
      (newQuantity <= 0 &&
        (() => {
          setNewQuantity(newQuantity);
          setEmptyQuantityWarning(true);
          setTimeout(() => {
            setEmptyQuantityWarning(false);
          }, 2000);
        })());

    if (newQuantity <= 0) {
      return;
    } else {
      setClikedEditId(null);
      const updated = foodLog?.map((food: FoodLogTypes) => {
        if (food.foodId === id) {
          return { ...food, quantity: newQuantity };
        }
        return food;
      });
      setFoodLog(updated);
    }
  };

  const quantityCalories = food.calories * food.quantity;

  return (
    <div
      onMouseEnter={() => handleMouseEnterd(food.foodId)}
      onMouseLeave={handleMouseLeaving}
      key={food.foodId}
      className={` mt-8 relative  grid grid-cols-1 lg:grid-cols-3 border border-gray-100 rounded-lg p-2 duration-300 ease-in-out  hover:bg-purple-400 `}
    >
      {/* Food Name */}
      <span className='col-span-1 mb-3 lg:mb-0'>{food.label}</span>
      <span className='col-span-1 mx-2 '>
        {/* Quantity Warning */}
        {emptyQuantityWarning && (
          <div
            className='top-0 absolute flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'
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
                fill-rule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                clip-rule='evenodd'
              ></path>
            </svg>

            <div>
              <span className='font-medium'>Please Enter a Quantity</span>
            </div>
          </div>
        )}

        {/* Input and Save  */}
        {clikedEditId === food.foodId ? (
          <>
            <input
              className='p-1 focus:outline-none mr-2 border-2 '
              placeholder='Enter Quantity'
              type='number'
              value={newQuantity}
              onChange={(e) => handleQuantityChange(e)}
            />
            <Button
              onClick={() => handleQuantitySave(food.foodId)}
              color='purple'
              size='small'
            >
              Save
            </Button>
          </>
        ) : (
          <span className='relative'>
            {hoverItemId && delayRender && (
              <div className='relative z-40'>
                <HoverFoodLogItemData foodL={food.label} />
              </div>
            )}
            <span className='mr-2'>{food.quantity}X</span>
            <FontAwesomeIcon
              icon={faEdit}
              className='text-gray-600 cursor-pointer'
              onClick={() => handleQuantity(food.foodId)}
            />
          </span>
        )}
      </span>

      <span className='lg:flex lg:justify-between lg:col-span-1 mt-3 lg:mt-0 w-full relative'>
        <span className=''>
          {quantityCalories.toFixed(0)} <span>kcal</span>
        </span>
        {/* Delete */}
        {hoverItemId === food.foodId && (
          <span className='absolute right-0 lg:relative '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 hover:cursor-pointer'
              onClick={() => {
                setDeleteClicked(true);
              }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
              />
            </svg>
          </span>
        )}
      </span>

      {deleteClicked && (
        <ConfirmDelete
          setDeleteClicked={setDeleteClicked}
          onDelete={() => handleFoodItemDelete(food.foodId)}
        />
      )}
    </div>
  );
};

export default Food;
