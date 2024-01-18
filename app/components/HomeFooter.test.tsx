import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeFooter from './HomeFooter';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter to provide context for Link

describe('Home Footer Component', () => {
  it('renders component correctly', () => {
    render(
      <MemoryRouter>
        <HomeFooter />
      </MemoryRouter>
    );

    // Test about and contact links
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');

    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    // Test link attributes
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
  });
});
