'use client';

import React, { useState } from 'react';
import grapes from '../images/dashboard/grapes.png';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '50%',
    width: '50%',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

const FoodSearch = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main>
      {/* search button activate modal */}
      <button
        onClick={openModal}
        className='p-2 flex relative top-5 hover:bg-slate-100 rounded-md

    '
      >
        <Image src={grapes} alt='grapes' className='w-5' />

        <p className='text-bolder text-1xl font-bold mx-1'>FOOD</p>
        <span className='relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </span>
      </button>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Search</h2> */}
        <button
          onClick={closeModal}
          className='absolute right-2 top-2 shadow bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-1 rounded  align-middle md:p-2 md:text-xs  '
        >
          close
        </button>
        <form className='w-full flex justify-center items-center p-5'>
          <input
            type='text'
            placeholder='Search...'
            className='p-2 border-slate-800 border rounded '
          />
          <button
            type='submit'
            className=' left-1 relative shadow bg-green-700 hover:bg-green-800 focus:shadow-outline focus:outline-none  text-white font-bold p-3 rounded  align-middle md:text-xs md:w-50 '
          >
            Search
          </button>
        </form>

        {/* Results */}
        <ul>
          <li>fgvdfg</li>
          <li>fgvdfg</li>
          <li>fgvdfg</li>
          <li>fgvdfg</li>
          <li>fgvdfg</li>
          <li>fgvdfg</li>
          <li>fgvdfg</li>
        </ul>
      </Modal>
    </main>
  );
};

export default FoodSearch;
