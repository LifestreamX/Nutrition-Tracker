import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('Navbar component', () => {
  it('renders the navigation links', () => {
    render(<NavBar />);
  });

  const homeLink = screen.getByText('Home');
  const aboutLink = screen.getByText('About');
  const contactLink = screen.getByText('contact');
  const dashboardLink = screen.getByText('Dashboard');
  const settingsLink = screen.getByText('Settings');
  const signOut = screen.getByText('Sign out');
  const myFoodLogs = screen.getByText('My Food Logs');

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(dashboardLink).toBeInTheDocument();
  expect(settingsLink).toBeInTheDocument();
  expect(signOut).toBeInTheDocument();
  expect(myFoodLogs).toBeInTheDocument();

  it('displays correct user profile image when logged in', () => {
    // Mock the profileAvatar value using context
    jest.mock('@/MyContext', () => ({
      useMyContext: () => ({ profileAvatar: 'fake-avatar-url' }),
    }));
  });

  render(<NavBar />);

  // Assuming the profile image is displayed
  const profileImage = screen.getAllByAltText('Default avatar');
  expect(profileImage).toBeInTheDocument();

  it('toggles mobile menu when button clicked', () => {
    render(<NavBar />);

    const mobileMenuButton = screen.getAllByLabelText('Open main menu');
  });
});
