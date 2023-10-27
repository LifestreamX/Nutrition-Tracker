'use client';

import { useMyContext } from '@/MyContext';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker: React.FC = () => {
  const { selectedDate, setSelectedDate }: any = useMyContext();
  const [isDateClicked, setIsDateClicked] = useState(false);

  const handleDateChange = (date: Date | null) => {
    let currentDate;

    if (date) {
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      currentDate = [formattedDate];
      setSelectedDate(currentDate);

      

        localStorage.setItem('selectedDate', JSON.stringify(currentDate));
      
    } else {
      setSelectedDate(null);
    }
  };

  let dateChangeText = selectedDate === null ? 'Select a Date' : 'Change Date';

  return (
    <button>
      <DatePicker
        selected={selectedDate ? selectedDate?.dateObject : null}
        onChange={handleDateChange}
        dateFormat='EEEE, d MMMM yyyy'
        className='text-center  cursor-pointer p-1 rounded-lg font-semibold  text-lg  placeholder-purple-500 hover:placeholder-purple-800 dark:bg-purple-800 dark:placeholder-white dark:hover:placeholder-white dark:hover:bg-purple-900   '
        placeholderText={dateChangeText}
      />
    </button>
  );
};

export default MyDatePicker;
