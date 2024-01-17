import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

it('renders LoadingSpinner component', () => {
  const { getByRole } = render(<LoadingSpinner />);

  // Assert that the loading spinner is rendered
  const loadingSpinner = getByRole('status');
  expect(loadingSpinner).toBeInTheDocument();
});
