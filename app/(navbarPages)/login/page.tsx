import { Metadata } from 'next';
import LoginForm from './LoginForm';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/authOptions';

export const metadata: Metadata = {
  title: 'Login',
  description: 'page for user to login',
};

const Login = async () => {


  return (
    <section className='relative  top-28  flex flex-col justify-center items-center  '>
      <LoginForm />
    </section>
  );
};

export default Login;
