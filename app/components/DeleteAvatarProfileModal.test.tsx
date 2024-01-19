import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteAvatarProfileModal from './DeleteAvatarProfileModal';
import { useMyContext } from '@/MyContext';
import 'resize-observer-polyfill';

jest.mock('../../MyContext', () => ({
  useMyContext: jest.fn(() => ({
    setProfileAvatar: jest.fn(),
    profileAvatar: 'mockedProfileAvatar',
  })),
}));

describe('Delete Avatar Profile Modal', () => {
  it('renders modal with delete confirmation', async () => {
    // Mock the setShowModal function
    const setShowModal = jest.fn();

    // Render the component
    const { getByText } = render(
      <DeleteAvatarProfileModal showModal={true} setShowModal={setShowModal} />
    );

    // Assertions
    expect(getByText('Delete', { selector: 'h3' })).toBeInTheDocument();
    expect(
      getByText('Are you sure you want to delete your profile picture?')
    ).toBeInTheDocument();

    expect(getByText('Cancel')).toBeInTheDocument();

    // Simulate clicking the delete button
    const deleteModalTrigger = await screen.findByTestId('delete-modal');
    fireEvent.click(deleteModalTrigger);
    expect(setShowModal).toHaveBeenCalledWith(false);

    setShowModal.mockClear();

    const cancelButton = await screen.findByTestId('cancel-modal');
    fireEvent.click(cancelButton);
    expect(setShowModal).toHaveBeenCalledWith(false);

    // Check if handleDeleteProfileImage is called
  });
});
