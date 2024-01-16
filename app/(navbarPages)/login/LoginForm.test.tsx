import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';
import { useRouter } from 'next/navigation';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('LoginForm Component', () => {
  it('renders without errors', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);

    // You can add more assertions based on your component structure
    expect(getByLabelText(/Email/i)).toBeInTheDocument();
    expect(getByLabelText(/Password/i)).toBeInTheDocument();
    expect(getByText(/Sign In/i)).toBeInTheDocument();
  });

  it('handles form submission correctly', async () => {
    const { getByLabelText, getByText } = render(<LoginForm />);

    // Simulate user input
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(getByLabelText(/password/i), {
      target: { value: 'Test1234' },
    });

    // Simulate form submission
    fireEvent.submit(getByText(/login/i));
  });

  // Add more tests for different scenarios...
});
