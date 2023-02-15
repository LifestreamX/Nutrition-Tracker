import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import HomeHero from './components/HomeHero';
import HomeContent from './components/HomeContent';
import HomeFooter from './components/HomeFooter';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex flex-col h-full'>
      <section className='mt-40'>
        <HomeHero />
      </section>
      <section className='mt-32'>
        <HomeContent />
      </section>
      <section className='mt-16 flex justify-center align-middle '>
        <HomeFooter />
      </section>
    </main>
  );
}
