import { Metadata } from 'next';
import SignUpForm from './SignUpForm';

export const metadata: Metadata = {
  title: 'Signup',
};

const SignUp = (): JSX.Element => {
  return (
    <section className='relative top-10 flex flex-col justify-center items-center  '>
      <SignUpForm />
    </section>
  );
};

export default SignUp;
