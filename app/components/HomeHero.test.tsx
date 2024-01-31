import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeHero from './HomeHero';

// describe('HomeHero Component', () => {
//   it('renders component with correct content', () => {
//     render(<HomeHero />);

//     expect(screen.getByText('Eat Better')).toBeInTheDocument();
//     expect(screen.getByText('Live Healthier')).toBeInTheDocument();
//     expect(screen.getByText('Track your nutriiton')).toBeInTheDocument();

//     expect(screen.getByAltText('fruit-1')).toBeInTheDocument();
//     expect(screen.getByAltText('fruit-1')).toHaveAttribute('width', '500');
//     expect(screen.getByAltText('fruit-1')).toHaveAttribute('height', '500');

//     expect(screen.getByAltText('fruit-2')).toBeInTheDocument();
//     expect(screen.getByAltText('fruit-2')).toHaveAttribute('width', '500');
//     expect(screen.getByAltText('fruit-2')).toHaveAttribute('height', '500');

//     const signUpButton = screen.getByText('Sign Up Now!');
//     expect(signUpButton).toBeInTheDocument();
//     expect(signUpButton.closest('a')).toHaveAttribute('href', '/signup');
//   });
// });
