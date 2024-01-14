import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
} from '@testing-library/react';
import ContactForm from './ContactForm';
import '@testing-library/jest-dom';

// AAA - ARRANGE - ACT - ASSERT

it('renders form and submits email', async () => {
  // render form component
  // ARRANGE
  const { getByText, queryByText, getByTestId } = render(<ContactForm />);

  // fill form fields
  // ACT
  fireEvent.change(getByTestId('name-input'), { target: { value: 'Tyler' } });
  fireEvent.change(getByTestId('email-input'), {
    target: { value: 'tylerallen@live.com' },
  });
  fireEvent.change(getByTestId('message-input'), {
    target: { value: 'This is a test message' },
  });

  // submit form
  fireEvent.click(getByText(/Send/i));

  // pending for success message to show
  // ASSERT
  await waitFor(() => {
    expect(queryByText(/Email Sent!/i)).toBeInTheDocument();
  });
});
