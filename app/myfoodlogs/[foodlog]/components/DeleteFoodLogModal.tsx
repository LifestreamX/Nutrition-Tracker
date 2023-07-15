import React from 'react';

interface DeleteFoodTypeProps {
  isOpen: Boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteFoodLogModal = ({
  isOpen,
  onCancel,
  onConfirm,
}: DeleteFoodTypeProps) => {
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? 'flex' : 'hidden'
      }`}
    >
      <div className='flex items-center justify-center min-h-screen px-4 text-center w-screen '>
        <div className='fixed inset-0 transition-opacity'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>
        <span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
        &#8203;
        <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
          <div>
            <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100'>
              <svg
                className='h-6 w-6 text-red-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
            <div className='mt-3 text-center sm:mt-5'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Confirm Deletion
              </h3>
              <div className='mt-2'>
                <p className='text-sm text-gray-500'>
                  Are you sure you want to delete this food log?
                </p>
              </div>
            </div>
          </div>
          <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
            <button
              onClick={onConfirm}
              type='button'
              className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
            >
              Delete
            </button>
            <button
              onClick={onCancel}
              type='button'
              className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteFoodLogModal;
