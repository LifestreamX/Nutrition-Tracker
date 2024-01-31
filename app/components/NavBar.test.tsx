import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { MyProvider, useMyContext } from '../../MyContext';

// Mock the MyProvider context
// Explicitly type the mocked context

describe('Navbar component', () => {
  it('renders the navigation links', async () => {
    render(
      <MemoryRouter>
        <MyProvider>
          <NavBar session={null} />
        </MyProvider>
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('renders links when profile is clicked', async () => {
    render(
      <MemoryRouter>
        <MyProvider>
          <NavBar session={null} />
        </MyProvider>
      </MemoryRouter>
    );

    const menuButton = screen.getByTestId('right-nav-menu-button');

    userEvent.click(menuButton);

    const dashboardLink = await screen.findByTestId('Dashboard');
    const settingsLink = await screen.findByTestId('Settings');
    const signOut = await screen.findByTestId('Sign-out');
    const myFoodLogs = await screen.findByTestId('My-Food-Logs');

    expect(dashboardLink).toBeInTheDocument();
    expect(settingsLink).toBeInTheDocument();
    expect(signOut).toBeInTheDocument();
    expect(myFoodLogs).toBeInTheDocument();

    screen.debug();
  });
});

it('displays avatar when rendered', () => {
  // Mock the profileAvatar value using context
  jest.mock('../../MyContext', () => ({
    useMyContext: () => ({ profileAvatar: 'fake-avatar-url' }),
  }));

  render(
    <MemoryRouter>
      <MyProvider>
        <NavBar session={null} />
      </MyProvider>
    </MemoryRouter>
  );

  // Assuming the profile image is displayed
  const profileImage = screen.getByTestId('avatar');
  expect(profileImage).toBeInTheDocument();
});

it('toggles mobile menu when button clicked', () => {
  render(
    <MemoryRouter>
      <MyProvider>
        <NavBar session={null} />
      </MyProvider>
    </MemoryRouter>
  );

  const mobileMenuButton = screen.getAllByTestId('mobile-menu-button')[0];

  // Click to open menu
  userEvent.click(mobileMenuButton);
  expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument();
});
