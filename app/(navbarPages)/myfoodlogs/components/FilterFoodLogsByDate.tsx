import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type FilterFoodLogsByDateProps = {
  startDate: Date | any;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null | string[]>>;
};

const FilterFoodLogsByDate: React.FC<FilterFoodLogsByDateProps> = ({
  startDate,
  setStartDate,
}) => {
  const handleDateChange = (date: Date | null): void => {
    let currentDate;

    if (date) {
      const formattedDate = date?.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      currentDate = [formattedDate];
      setStartDate(currentDate);
    } else {
      setStartDate(null);
    }
  };

  const placeHolder = startDate !== null ? startDate : 'Select a specific date';

  return (
    <div className='flex flex-col md:flex-row   '>
      <div>
        <DatePicker
          selected={startDate ? startDate.dateObject : null}
          onChange={handleDateChange}
          className=' cursor-pointer w-full p-3 text-lg mb-5  text-gray-700 border rounded-lg focus:outline-none focus:ring  focus:border-0 focus:ring-purple-500 text-center dark:bg-gray-700 '
          placeholderText={placeHolder}
          dateFormat='EEEE, d MMMM yyyy'
        />
      </div>

      {startDate !== null && (
        <button
          onClick={() => setStartDate(null)}
          className=' mb-5 md:mb-0 md:ml-5 text-lg relative md:bottom-2  text-red-500 hover:text-red-800  font-md justify-center tracking-wide '
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default FilterFoodLogsByDate;
