'use client';

import React, { useEffect, useState } from 'react';
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
import { useTheme } from 'next-themes';
import LoadingSpinner from '@/app/components/LoadingSpinner';

const FoodSearch: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log(theme);
  });

  let modalBackGroundColor = theme === 'dark' ? '#2d3748' : 'white';

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
      background: modalBackGroundColor,
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
      background: modalBackGroundColor,
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'));

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
        className='p-2 flex relative top-5 hover:bg-slate-100 dark:hover:bg-gray-800   rounded-md

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
        <div className='sticky top-0 mb-5 z-10  '>
          <div className='w-full flex justify-end relative right-2'>
            <button
              onClick={closeModal}
              className='text-2xl text-red-500 hover:text-white-900 font-bold '
            >
              X
            </button>
          </div>

          <div className='w-full flex  flex-row justify-center items-center p-5  '>
            <input
              type='text'
              placeholder='Search...'
              className=' border-gray-800 dark:border-gray-300 focus:border-0 border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-3 dark:bg-gray-700 '
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

          {/* success ui for added food item */}
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

        {/* loaoding spinner for fetching food data search */}
        {debouncedValue.length !== 0 && searchData.length === 0 && (
          <section className='flex h-full justify-center '>
            <div className='flex relative top-10 md:top-0 md:items-center '>
              {' '}
              <LoadingSpinner />
             
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
                        className={` ${
                          nutritionSearchData?.foodId === foodId &&
                          nutritionSearchData?.label === label &&
                          'bg-purple-200  dark:focus:bg-purple-700 dark:bg-purple-700'
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
