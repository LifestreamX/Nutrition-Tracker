import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import HomeHero from '../components/HomeHero';
import HomeContent from '../components/HomeContent';
import HomeFooter from '../components/HomeFooter';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <main className='flex flex-col h-full'>
      <section className='mt-40 sm:mt-80  '>
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
