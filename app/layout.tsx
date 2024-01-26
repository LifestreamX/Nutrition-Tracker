import { MyProvider } from '@/MyContext';
import './globals.css';
import './output.css';
import { Oswald, Kanit } from '@next/font/google';
import { Metadata } from 'next';
import AuthProvider from './components/backendcomponents/AuthProvider';


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
    <html lang='en' suppressHydrationWarning={true}>
      <AuthProvider>
        <MyProvider>{children}</MyProvider>
      </AuthProvider>
    </html>
  );
}
