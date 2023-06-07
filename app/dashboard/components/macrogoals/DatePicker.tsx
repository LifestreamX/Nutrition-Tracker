import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      setSelectedDate(date);
    }
  };

  return (
    <div >
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="EEEE, d MMMM yyyy"
        placeholderText="Select a date"
      />
      {/* <p>Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}</p> */}
    </div>
  );
};

export default MyDatePicker;