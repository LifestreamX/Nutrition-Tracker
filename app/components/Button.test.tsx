import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button'; // Adjust the import path based on your project structure

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);

    expect(getByText('Click me')).toHaveClass(
      'bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 text-base'
    );
  });

  it('renders correctly with specified color prop', () => {
    const { getByText } = render(<Button color='purple'>Click me</Button>);

    expect(getByText('Click me')).toHaveClass(
      'bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded'
    );
  });

  it('renders correctly with specified size prop', () => {
    const { getByText } = render(<Button size='large'>Click me</Button>);

    expect(getByText('Click me')).toHaveClass('py-4 px-4 text-2xl');
  });

  it('renders correctly with responsiveWidth prop', () => {
    const { getByText } = render(<Button responsiveWidth>Click me</Button>);

    expect(getByText('Click me')).toHaveClass('w-full md:w-52');
  });

  it('calls the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );

    fireEvent.click(getByText('Click me'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
