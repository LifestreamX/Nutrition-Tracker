import React from 'react';
import { render } from '@testing-library/react';
import Terms from './page';

it('renders term component without errors', () => {
  render(<Terms />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Terms />);
  expect(asFragment()).toMatchSnapshot();
  // Update snapshots if the UI changes intentionally
});
