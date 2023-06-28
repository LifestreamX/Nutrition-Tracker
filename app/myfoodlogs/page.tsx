import { useMyContext } from '@/MyContext';
import React from 'react';

const MyFoodLogs = () => {
  const { submittedFoodLogs } = useMyContext();


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4'>My Food Logs</h1>
      <ul className='bg-gray-200 p-4 rounded-lg'>
        {/* {data.map((item) => (
          <li key={item.id} className='mb-2'>
            {item.text}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default MyFoodLogs;
