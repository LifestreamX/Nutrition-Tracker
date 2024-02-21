'use client';

import Image from 'next/image';
import googleLogo from '@/public/google.png';
import { signIn } from 'next-auth/react';
import { Session as NextAuthSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

interface Props {
  setGoogleClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export function GoogleSignInButton({ setGoogleClicked }: Props) {

  const handleClick = async () => {
    signIn('google');
    setGoogleClicked(false);
  };

  return (
    <button
      onClick={handleClick}
      className=' shadow-md flex items-center font-semibold justify-center h-14 px-4 mt-4 text-sm md:text-xl transition-colors duration-300 bg-white border-2 border-gray text-black rounded-lg focus:shadow-outline hover:bg-slate-200'
    >
      <Image src={googleLogo} alt='Google Logo' width={20} height={20} />
      <span className='ml-4'>Continue with Google</span>
    </button>
  );
}
