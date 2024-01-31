import { authOptions } from '../api/auth/[...nextAuth]/route';
import React from 'react';
import NavBar from './NavBar';
import { getServerSession } from 'next-auth';

const NavBarWrapper = async () => {
  const session = await getServerSession(authOptions);

  return <NavBar session={session} />;
};

export default NavBarWrapper;
