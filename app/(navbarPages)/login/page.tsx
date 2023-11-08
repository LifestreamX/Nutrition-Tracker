import { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Login',
};

const Login = (): JSX.Element => {
  return <LoginForm />;
};

export default Login;
