import React from 'react';
import About from './page';
import { render } from '@testing-library/react';

it('renders component without any errors', () => {
  render(<About />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});
