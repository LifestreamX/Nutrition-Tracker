import { MyProvider } from '@/MyContext';
import NavBar from './components/NavBar';
import './globals.css';
import './output.css';
import Providers from './Providers';
import { Oswald, Kanit } from '@next/font/google';
import { Metadata } from 'next';
import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

export const metadata: Metadata = {
  title: 'nutrition tracker',

  description: 'track your nutrition progress daily',
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
    <html lang='en' suppressHydrationWarning>
      <MyProvider>{children}</MyProvider>
    </html>
  );
}
