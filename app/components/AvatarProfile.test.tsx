// UploadAvatar.test.js or UploadAvatar.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UploadAvatar from './AvatarProfile'; // Adjust the import path based on your project structure
import 'resize-observer-polyfill';

// Mock the useMyContext hook
jest.mock('../../MyContext', () => ({
  useMyContext: jest.fn(() => ({
    setProfileAvatar: jest.fn(),
    profileAvatar: 'mockedProfileAvatar',
  })),
}));

describe('Upload Avatar Component', () => {
  it('renders correctly with default state', () => {
    render(<UploadAvatar />);

    expect(screen.getByLabelText('Change Image')).toBeInTheDocument();
  });
});
