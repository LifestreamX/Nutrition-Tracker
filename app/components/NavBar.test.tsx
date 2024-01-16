import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from './NavBar';
import { useMyContext } from '@/MyContext';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

// Mock the MyProvider context
// Explicitly type the mocked context
jest.mock('@/MyContext', () => {
  const originalModule = jest.requireActual('@/MyContext');

  return {
    ...originalModule,
    useMyContext: jest.fn() as jest.MockedFunction<
      typeof originalModule.useMyContext
    >,
    MyProvider: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

describe('Navbar component', () => {
  it('renders the navigation links', () => {
    render(
      <MemoryRouter>
        {/* Wrap NavBar with MemoryRouter */}
        <NavBar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');
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

    // Simulate clicking on a link
    userEvent.click(homeLink);

    expect(window.location.pathname).toBe('/');

    // Repeat the same for other links as needed
  });

  it('displays correct user profile image when logged in', () => {
    // Mock the profileAvatar value using context
    jest.mock('@/MyContext', () => ({
      useMyContext: () => ({ profileAvatar: 'fake-avatar-url' }),
    }));

    render(
      <MemoryRouter>
        {/* Wrap NavBar with MemoryRouter */}
        <NavBar />
      </MemoryRouter>
    );

    // Assuming the profile image is displayed
    const profileImage = screen.getAllByAltText('Default avatar');
    expect(profileImage).toBeInTheDocument();
  });

  it('toggles mobile menu when button clicked', () => {
    render(
      <MemoryRouter>
        {/* Wrap NavBar with MemoryRouter */}
        <NavBar />
      </MemoryRouter>
    );

    const mobileMenuButton = screen.getAllByTestId('mobile-menu-button')[0];

    // Click to open menu
    userEvent.click(mobileMenuButton);
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument();
  });
});
