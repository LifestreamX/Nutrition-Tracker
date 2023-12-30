import { Metadata } from 'next';
import LoginForm from './LoginForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
  description: 'page for user to login',
};

const Login = (): JSX.Element => {
  return (
    <section className='relative  top-28  flex flex-col justify-center items-center  '>
      <LoginForm />
    </section>
  );
};

export default Login;
