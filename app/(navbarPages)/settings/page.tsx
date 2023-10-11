'use client';

import { useMyContext } from '@/MyContext';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
// import AvatarProfile from '../../components/AvatarProfile';
import UploadAvatar from '../../components/AvatarProfile';
import Image from 'next/image';
import NoAvatar from '../images/NoAvatar.png';

const Settings: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [img, setImg] = useState();

  const { profileAvatar } = useMyContext();

  const handlePhotoChange = (e: any) => {
    setImg(e.target.files[0]);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  let Avatar = profileAvatar === undefined ? NoAvatar : profileAvatar;

  return (
    <main className='flex flex-col w-full justify-center items-center '>
      <section className='rounded-xl w-4/5 flex flex-col  max-w-xl shadow-2xl relative top-40 p-10 dark:bg-gray-800'>
        <h1 className='text-2xl font-bold w-full bottom-24 right-9 relative'>
          Settings
        </h1>

        <div className='flex flex-col container'>
          {/* dark mode setting */}
          <div className='flex-col justify-center items-center '>
            <div className='w-1/2 '>
              <h1 className='text-2xl'>Theme</h1>
              <span className=' w-full py-px bg-gray-500 flex' />
            </div>

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
                    onClick={() => setTheme('light')}
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
                />
              </div>

              <div className='mt-5'>
                <UploadAvatar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Settings;
