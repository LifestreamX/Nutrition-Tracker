import { useMyContext } from '@/MyContext';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker: React.FC = () => {
  const { selectedDate, setSelectedDate } = useMyContext();

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
      // localStorage.removeItem('selectedDate');
    }
  };


  let dateChangeText = selectedDate === null ? 'Select a Date' : 'Change Date';

  return (
    <div>
      <DatePicker
        selected={selectedDate ? selectedDate.dateObject : null}
        onChange={handleDateChange}
        dateFormat='EEEE, d MMMM yyyy'
        placeholderText={dateChangeText}
        className='text-center'
      />

      {/* <p>Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}</p> */}
    </div>
  );
};

export default MyDatePicker;
