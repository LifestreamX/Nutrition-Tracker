import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useMyContext } from '@/MyContext';

const PickMonth = ({ selectMonth, setSelectMonth }) => {
  const months = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleMonthPick = (e) => {
    setSelectMonth(e.target.value);
  };

  // const handleDayPick = () => {};

  // const handleYearPick = () => {};

  // MONTH
  return (
    <div className='relative inline-block'>
      <label htmlFor='' className=''>
        Filter By Month
      </label>
      <div>
        <select
          value={selectMonth}
          onChange={handleMonthPick}
          className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          id='month'
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M10 12l-6-6 1.5-1.5L10 9.29l4.5-4.5L16 6l-6 6z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

// DAY
const PickDay = ({ value, onChange }) => {
  let days = [];

  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  return (
    <div className='relative inline-block'>
      <label htmlFor=''>Choose Day</label>
      <select
        className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
        id='month'
      >
        {days.map((day, index) => (
          <option key={index} value={index + 1}>
            {day}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path
            fillRule='evenodd'
            d='M10 12l-6-6 1.5-1.5L10 9.29l4.5-4.5L16 6l-6 6z'
          />
        </svg>
      </div>
    </div>
  );
};

const PickYear = ({ value, onChange }) => {
  const { submittedFoodLogs } = useMyContext();

  let years = [];

  submittedFoodLogs.map((e) => {
    years.push(e.selectedDate);
  });

  console.log(years);

  const currentYear = new Date().getFullYear();
  // const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  // console.log(years);

  return <div></div>;
};

export { PickDay, PickMonth, PickYear };
