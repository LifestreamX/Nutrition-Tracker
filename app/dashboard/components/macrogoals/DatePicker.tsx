import { useMyContext } from '@/MyContext';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker: React.FC = () => {
  const { selectedDate, setSelectedDate } = useMyContext();

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      setSelectedDate({ dateObject: date, formattedDate: formattedDate });
    } else {
      setSelectedDate(null);
    }
  };


  return (
    <div>
      <DatePicker
        selected={selectedDate ? selectedDate.dateObject : null}
        onChange={handleDateChange}
        dateFormat='EEEE, d MMMM yyyy'
        placeholderText='Select a date'
        className='text-center'
      />
      
      {/* <p>Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}</p> */}
    </div>
  );
};

export default MyDatePicker;
