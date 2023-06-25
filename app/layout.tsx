import { MyProvider } from '@/MyContext';
import NavBar from './components/NavBar';
import './globals.css';
import './output.css';
import Providers from './Providers';
import { Oswald, Kanit } from '@next/font/google';

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
    <html lang='en'>
      <head />

      <MyProvider>
        <body className={kanit.className}>
          <main className='w-screen'>
            <NavBar />
            <Providers>{children}</Providers>
          </main>
        </body>
      </MyProvider>
    </html>
  );
}
