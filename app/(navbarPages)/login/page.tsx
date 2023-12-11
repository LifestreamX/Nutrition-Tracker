import { Metadata } from 'next';
import LoginForm from './LoginForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
  description: 'page for user to login',
};

const Login = (): JSX.Element => {
  return (
    <section className='relative sm:top-32 top-28  flex flex-col justify-center items-center  '>
      <LoginForm />
      <div className='absolute bottom-12'>
        <Link href='./signup'>
          Don't have a account? Create one{' '}
          <span className='text-purple-400 hover:text-purple-800'>Here</span>
        </Link>
      </div>
    </section>
  );
};

export default Login;
