import NavBar from './components/NavBar';
import './globals.css';
import './output.css';

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

          {children}
        </main>
      </body>
    </html>
  );
}
