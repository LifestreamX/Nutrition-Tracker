'use client';

import { Metadata } from 'next';
import UserSettings from './UserSettings';

// export const metadata: Metadata = {
//   title: 'Settings',
//   description: 'setting for user to adjust dark theme and profile picture',
// };

const Settings: React.FC = () => {
  return (
    <>
      <main className='flex flex-col w-full justify-center items-center '>
        <section className='rounded-xl w-4/5 flex flex-col  max-w-xl shadow-2xl relative top-40 p-10 dark:bg-gray-800'>
          <h1 className='text-2xl font-bold w-full bottom-24 right-9 relative'>
            Settings
          </h1>
          <div className='flex flex-col container'>
            <UserSettings />
          </div>
        </section>
      </main>
    </>
  );
};

export default Settings;
