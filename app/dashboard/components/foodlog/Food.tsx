import { useMyContext } from '@/MyContext';
import React from 'react';
import { useState } from 'react';
import ConfirmDelete from './ConfirmDelete';

const Food = ({ food }) => {
  const { foodLog, setFoodLog } = useMyContext();

  const handleMouseEnterd = (foodId: string) => {
    setHoverItemId(foodId);
  };

  const handleMouseLeaving = () => {
    setHoverItemId(null);
  };

  const [hoverItemId, setHoverItemId] = useState<string | null>(null);

  const [deleteClicked, setDeleteClicked] = useState(false);

  const handleFoodItemDelete = (id: string): void => {
    setFoodLog((prevFood) => prevFood.filter((food) => food?.foodId !== id));
  };

  console.log(foodLog.length);

  return (
    <div
      onMouseEnter={() => handleMouseEnterd(food.foodId)}
      onMouseLeave={handleMouseLeaving}
      key={food.foodId}
      className={`grid grid-cols-3 justify-between items-center border border-gray-100 rounded-lg p-2 duration-300 ease-in-out  hover:bg-purple-200 `}
    >
      <span className='col-span-1'>{food.label}</span>
      {/* <span className='col-span-1'>{food.serving}</span> */}
      <span className='col-span-1'>{food.quantity}X</span>
      <div className='flex justify-between'>
        <span className='col-span-1'>
          {food.calories} <span>kcal</span>
        </span>
        {/* Delete */}
        {hoverItemId === food.foodId && (
          <span className='ml-4 '>
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
      </div>
      {deleteClicked && (
        <ConfirmDelete onDelete={() => handleFoodItemDelete(food.foodId)} />
      )}
    </div>
  );
};

export default Food;
