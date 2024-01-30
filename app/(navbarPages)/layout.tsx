import { MyProvider } from '@/MyContext';
import NavBar from '../components/NavBar';
import '../globals.css';
import '../output.css';
import Providers from '../Providers';
import { Oswald, Kanit } from '@next/font/google';
import { Metadata } from 'next';
import { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import AuthProvider from '../components/backendcomponents/AuthProvider';
import NavBarWrapper from '../components/NavBarWrapper';

export const metadata: Metadata = {
  title: {
    default: 'nutrition tracker',
    template: '%s | nutrition tracker',
  },
  description: 'track your nutrition progress daily',
  keywords: ['food', 'nutrition', 'tracking', 'calories', 'macronutrients'],
};

const oswald = Oswald({
  weight: ['400', '500'],
  subsets: ['latin'],
});
const kanit = Kanit({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head />

      <AuthProvider>
        <MyProvider>
          <body className={`${kanit.className} dark:bg-gray-900`}>
            <>
              <div className='fixed top-0 w-full z-50'>
                {/* @ts-expect-error Async Server Component */}
                <NavBarWrapper />
              </div>

              <Providers>
                <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
              </Providers>
            </>
          </body>
        </MyProvider>
      </AuthProvider>
    </>
  );
}
