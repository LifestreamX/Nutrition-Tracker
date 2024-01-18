import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeContent from './HomeContent';

describe('HomeeContent Component', () => {
  it('rendered component with correct content', () => {
    const { getByText, getByAltText } = render(<HomeContent />);

    expect(getByText(/Never too late to start/i)).toBeInTheDocument();

    const paragraph = screen.getByTestId('home-content-paragraph');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(
      /Start counting your calories today. Keep track of what you eat and achieve your nutrition goals. We have the tools to provide you for a healthy lifestyle./i
    );

    // Test the existence of specific text content
    expect(getByText(/Never too late to start/i)).toBeInTheDocument();
    expect(
      getByText(/Start counting your calories today/i)
    ).toBeInTheDocument();
    expect(getByText(/Track all your meals/i)).toBeInTheDocument();
    expect(getByText(/Choose The Right Foods/i)).toBeInTheDocument();
    expect(getByText(/Keep Your Motivation Up!/i)).toBeInTheDocument();

    // Test the existence of specific images
    expect(getByAltText('clipboard')).toBeInTheDocument();
    expect(getByAltText('food')).toBeInTheDocument();
    expect(getByAltText('motivation')).toBeInTheDocument();
  });
});
