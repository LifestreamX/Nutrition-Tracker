'use client';

import { useMyContext } from '@/MyContext';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const Settings: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;


  return (
    <main className='flex flex-col w-full justify-center items-center '>
      <section className='rounded-xl w-4/5 flex flex-col  max-w-xl shadow-2xl relative top-40 p-10 dark:bg-gray-800'>
        <h1 className='text-2xl font-bold w-full bottom-24 right-9 relative'>
          Settings
        </h1>
        {/* dark mode setting */}
        <div className='flex-col justify-center items-center'>
          <h1 className='text-2xl'>Theme</h1>
          <div className='flex mt-5'>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              {/* <option value='system'>System</option> */}
              <option value='dark'>Dark</option>
              <option value='light'>Light</option>
            </select>
            <div className='ml-5'>
              {currentTheme === 'dark' ? (
                <BsFillSunFill
                  className='h-8 w-8 cursor-pointer text-yellow-500'
                  onClick={() => setTheme('Light')}
                />
              ) : (
                <BsFillMoonFill
                  className='h-8 w-8 cursor-pointer'
                  onClick={() => setTheme('dark')}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Settings;
