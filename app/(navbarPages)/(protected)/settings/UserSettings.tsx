'use client';

import { useMyContext } from '@/MyContext';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import UploadAvatar from '../../../components/AvatarProfile';
// import UploadAvatar from '../../../components/AvatarProfile';
import Image from 'next/image';
import NoAvatar from '/public/images/NoAvatar.png';

const UserSettings: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const { profileAvatar } = useMyContext();

  const toggleTheme = async (newTheme: string) => {
    setTheme(newTheme);

    try {
      const res = await fetch('/api/theme', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({ themePreference: newTheme }),
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // const userSelectedTheme = localStorage.getItem('theme');

    // if (userSelectedTheme) {
    //   setTheme(userSelectedTheme);
    // }

    const fetchTheme = async () => {
      try {
        const res = await fetch('/api/theme', {
          method: 'GET',
          headers: {
            'Content-Type': 'text/plain',
          },
        });

        const themePreference = await res.text();
        setTheme(themePreference);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTheme();

    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = resolvedTheme || theme;

  let Avatar = profileAvatar === undefined ? NoAvatar : profileAvatar;

  return (
    <>
      {/* dark mode setting */}
      <div className='flex-col justify-center items-center '>
        <div className='w-1/2 '>
          <h1 className='text-2xl'>Theme</h1>
          <span className=' w-full py-px bg-gray-500 flex' />
        </div>

        <div className='flex mt-5'>
          <select
            value={resolvedTheme}
            onChange={(e) => toggleTheme(e.target.value)}
          >
            {/* <option value='system'>System</option> */}
            <option value='dark'>Dark</option>

            <option value='light'>Light</option>
          </select>
          <div className='ml-5'>
            {currentTheme === 'dark' ? (
              <BsFillSunFill
                className='h-8 w-8 cursor-pointer text-yellow-500'
                onClick={() => toggleTheme('light')}
              />
            ) : (
              <BsFillMoonFill
                className='h-8 w-8 cursor-pointer'
                onClick={() => toggleTheme('dark')}
              />
            )}
          </div>
        </div>
      </div>
      {/* change avatar setting */}
      <div className='mt-32'>
        <div>
          <div className='w-1/2'>
            <h1 className='text-2xl'>Profile Picture</h1>
            <span className=' w-full py-px bg-gray-500 flex' />
          </div>

          <div className='flex mt-8 mb-8'>
            <Image
              className='w-20 h-20 rounded-full border-gray border-2'
              src={Avatar}
              alt='Rounded avatar'
              width={50}
              height={50}
              priority={true} // or priority={1}
            />
          </div>

          <div className='mt-5'>
            <UploadAvatar />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
