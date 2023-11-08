import { Metadata } from 'next';
import SignUpForm from './SignUpForm';

export const metadata: Metadata = {
  title: 'Signup',
};

const SignUp = (): JSX.Element => {
  return <SignUpForm />;
};

export default SignUp;
