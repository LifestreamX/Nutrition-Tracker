import { Inter } from '@next/font/google';
import HomeHero from '../components/HomeHero';
import HomeContent from '../components/HomeContent';
import HomeFooter from '../components/HomeFooter';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'nutrition tracker home page',
};

export default function Home(): JSX.Element {
  return (
    <main className='flex flex-col h-full mt-12 '>
      <section className='mt-40 sm:mt-80   '>
        {/* @ts-expect-error Server Component */}
        <HomeHero />
      </section>
      <section className='mt-32 sm:mt-48'>
        <HomeContent />
      </section>
      <section className='flex justify-center align-middle mt-52'>
        <HomeFooter />
      </section>
    </main>
  );
}
