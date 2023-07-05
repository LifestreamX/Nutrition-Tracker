'use client';

import React, { useState } from 'react';
import grapes from '../../../images/dashboard/grapes.png';
import Image from 'next/image';
import Modal from 'react-modal';
import { useDebounce } from 'react-use';
import { useWindowSize } from 'react-use';
import fetchNutritionData from './FetchNutritionData';
import { FoodTypeData } from '@/types/Food.types';
import NutritionInfo from './NutritionInfo';
import Button from '@/app/components/Button';
import { useMyContext } from '@/MyContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '75%',
    width: '45%',
  },
};

const mobileCustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '95%',
    width: '95%',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

const FoodSearch = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchData, setSearchData] = useState<FoodTypeData[]>([]);
  const [val, setVal] = useState<string | number>('');
  const [debouncedValue, setDebouncedValue] = useState<string | number>('');
  const [openExtra, setOpenExtra] = useState(false);
  const {
    nutritionSearchData,
    setNutritionSearchData,
    successAdded,
    setSuccessAdded,
  } = useMyContext();
  const { width } = useWindowSize();

  const [, cancel] = useDebounce(
    () => {
      setDebouncedValue(val);

      if (val !== '') {
        handleSearch();
      }
    },
    1000,
    [val]
  );

  const handleSearch = async () => {
    let { hints } = await fetchNutritionData(val);

    let data: Object[] = [];

    hints.map((e: Object[]) => {
      data = [...data, e.food];
      setSearchData(data);
    });
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    setSearchData([]);
    setVal('');
    setOpenExtra(false);
  }

  let num = 3000;

  let stringNum = '3000';

  const handleItemHighlightClick = (
    protein: number,
    carbs: number,
    fats: number,
    calories: number,
    FIBTG: number,
    category: string,
    categoryLabel: string,
    foodId: string,
    image: string,
    knownAs: string,
    label: string,
    nutrients: {},
    servingSizes: any
  ) => {
    setNutritionSearchData({
      protein: protein,
      carbs: carbs,
      fats: fats,
      calories: calories,
      FIBTG: FIBTG,
      category: category,
      categoryLabel: categoryLabel,
      foodId: foodId,
      image: image,
      knownAs: knownAs,
      label: label,
      nutrients: nutrients,
      servingSizes: { ...servingSizes },
      quantity: 1,
    });
    setOpenExtra(true);
    setSuccessAdded(false);
  };

  return (
    <main>
      {/* search button activate modal */}
      <button
        onClick={openModal}
        className='p-2 flex relative top-5 hover:bg-slate-100 rounded-md

    '
      >
        <Image src={grapes} alt='grapes' className='w-6' />

        <p className='text-bolder text-1xl font-bold mx-1'>FOOD</p>
        <span className='relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
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
        style={width < 768 ? mobileCustomStyles : customStyles}
        contentLabel='Example Modal'
      >
        <div className='sticky top-0 mb-5 z-10 '>
          <div className='w-full flex justify-end relative right-2'>
            <button
              onClick={closeModal}
              className='text-2xl text-red-500 hover:text-white-900 font-bold '
            >
              X
            </button>
          </div>

          <div className='w-full flex  flex-row justify-center items-center p-5 '>
            <input
              type='text'
              placeholder='Search...'
              className=' border-slate-800 border rounded w-full p-2 focus:outline-none mr-3'
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
                val.length === 0 && setSearchData([]);
              }}
            />

            <div>
              <Button color='purple' size='medium' onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>

          {/* Results */}
          {/* Load info for clicked item */}
          <div className='z-40 bg-white'>{openExtra && <NutritionInfo />}</div>

          {/* SUCCESS */}
          {successAdded && (
            <div className='relative w-full flex justify-center items-center top-16 '>
              <div
                className='absolute   flex  p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400'
                role='alert'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 inline w-5 h-5 mr-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Info</span>
                <div>
                  <span className='text-md  md:text-lg '>
                    {nutritionSearchData.label} Added
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {debouncedValue.length !== 0 && searchData.length === 0 && (
          <section className='flex h-full justify-center '>
            <div className='flex relative top-10 md:top-0 md:items-center '>
              {' '}
              <svg
                aria-hidden='true'
                className='w-8 h-8 lg:w-14 lg:h-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600  '
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
            </div>
          </section>
        )}

        {val !== '' && (
          <main className='border'>
            {searchData.map((e: FoodTypeData) => {
              const {
                category,
                categoryLabel,
                foodId,
                image,
                knownAs,
                label,
                nutrients,
                servingSizes,
              } = e;

              const {
                CHOCDF: carbs,
                ENERC_KCAL: calories,
                FAT: fats,
                FIBTG,
                PROCNT: protein,
              } = nutrients;

              return (
                <>
                  <ul className='z-0'>
                    <li className='flex cursor-pointer m-2' key={foodId}>
                      <button
                        className={`focus:bg-purple-200 ${
                          nutritionSearchData?.foodId === foodId &&
                          nutritionSearchData?.label === label &&
                          'bg-purple-200'
                        } rounded p-2 w-screen text-left flex justify-between`}
                        onClick={() =>
                          handleItemHighlightClick(
                            protein,
                            carbs,
                            fats,
                            calories,
                            FIBTG,
                            category,
                            categoryLabel,
                            foodId,
                            image,
                            knownAs,
                            label,
                            nutrients,
                            servingSizes
                          )
                        }
                      >
                        <p className='flex '>{label}</p>
                        <p>kcal: {calories.toFixed(0)}</p>
                      </button>
                    </li>
                  </ul>
                </>
              );
            })}
          </main>
        )}
      </Modal>
    </main>
  );
};

export default FoodSearch;