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
      <section className=' relative top-48 sm:top-80'>
        <HomeHero />
      </section>
      <section className=' relative top-80 '>
        <HomeContent />
      </section>
      <section className=' relative top-120 '>
        <HomeFooter />
      </section>
    </main>
  );
}
