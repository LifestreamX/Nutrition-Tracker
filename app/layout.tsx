import NavBar from './components/NavBar';
import './globals.css';
import './output.css';
import Providers from './Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />

      <body>
        <main className='w-screen'>
          <NavBar />
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
