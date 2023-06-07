import React, { useState } from 'react';

const FoodLog = () => {
  const dummyData = [
    {
      food: 'eggs',
      serving: 3,
      cal: 2300,
      id: 1,
    },
    {
      food: 'tuna',
      serving: 3,
      cal: 10630,
      id: 12,
    },
    {
      food: 'eggs',
      serving: 3,
      cal: 2500,
      id: 13,
    },
    {
      food: 'eggs',
      serving: 3,
      cal: 300,
      id: 14,
    },
    {
      food: 'eggs',
      serving: 4,
      cal: 1060,
      id: 15,
    },
    {
      food: 'eggs',
      serving: 4,
      cal: 200,
      id: 16,
    },
    {
      food: 'eggs',
      serving: 2,
      cal: 2040,
      id: 17,
    },
    { food: 'eggs', serving: 6, cal: 2, id: 12421 },
    {
      food: 'eggs',
      serving: 31,
      cal: 2400,
      id: 19,
    },
    {
      food: 'eggs',
      serving: 31,
      cal: 2400,
      id: 11233,
    },
    {
      food: 'eggs',
      serving: 31,
      cal: 2400,
      id: 1234222,
    },
    {
      food: 'eggs',
      serving: 31,
      cal: 2400,
      id: 1111111,
    },
  ];

  const [foodId, setFoodId] = useState(null);

  const handleMouseEnter = (id) => {
    setFoodId(id);
    console.log(id);
  };

  //   const handleMouseLeave = () => {
  //     setHoverId(null);
  //   };

  return (
    <div className='bg-white rounded-lg shadow-lg w-5/6 p-10'>
      <div className=' p-4  grid grid-cols-1 gap-4 justify-center items-center text-center '>
        {dummyData.map((e) => (
          <button
            key={e.id}
            className={`grid grid-cols-3 justify-between items-center border border-gray-100 rounded-lg p-2 hover:cursor-pointer ${
              foodId === e.id ? 'bg-slate-200' : 'hover:bg-slate-100'
            }`}
            onClick={() => {
              handleMouseEnter(e.id);
            }}
            // onMouseleave={handleMouseLeave}
          >
            <span className='col-span-1'>{e.food}</span>
            <span className='col-span-1'>{e.serving}</span>
            <span className='col-span-1'>
              {e.cal} <span>kcal</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FoodLog;
