'use client';

import React, { useState } from 'react';
import grapes from '../images/dashboard/grapes.png';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import fetchFood from './fetchData';
import useFetch from '@/hooks/useFetch';
import { useDebounce } from 'react-use';

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
  const [searchData, setSearchData] = useState([]);
  // const [userInput, setUserInput] = useState('');

  const [val, setVal] = React.useState('');
  const [debouncedValue, setDebouncedValue] = React.useState('');

  const [, cancel] = useDebounce(
    () => {
      setDebouncedValue(val);

      handleSearch();
    },
    2000,
    [val]
  );


  
  // const handleSearch = async () => {
  //   let { hits } = await useFetch(val);

  //   let data = [];

  //   hits.map((e) => {
  //     data = [...data, e];
  //   });

  //   setSearchData(data);
  // };


  // Second API Logic
  const handleSearch = async () => {
    let { hints } = await useFetch(val);

    // console.log(hints);

    let data = [];

    hints.map((e) => {
      console.log(e.food.label);
      data = [...data, e.food.label];
    });

    setSearchData(data);
  };

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
          className='absolute right-2 top-2 shadow bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold  px-2 rounded-full align-middle   '
        >
          X
        </button>
        <div className='w-full flex flex-col md:flex-row justify-center items-center p-5 '>
          <input
            type='text'
            placeholder='Search...'
            className=' border-slate-800 border rounded w-full p-1 '
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
          <button
            onClick={cancel}
            // type='submit'
            className='w-full md:w-32 mt-2 md:mt-0 relative shadow bg-green-700 hover:bg-green-800 focus:shadow-outline focus:outline-none  text-white font-bold p-1 rounded  align-middle  md:ml-2'
          >
            Search
          </button>
        </div>
        {/* Results */}
        <ul>
          {searchData.map((e) => {
            // return <li>{e.fields.item_name}</li>;
            return <li>{searchData}</li>;
          })}
        </ul>
      </Modal>
    </main>
  );
};

export default FoodSearch;
