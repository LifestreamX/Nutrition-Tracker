'use client';

import React, { useState } from 'react';

import grapes from '../../images/dashboard/grapes.png';

// import grapes from '.../images/dashboard/grapes.png';
import Image from 'next/image';
import Modal from 'react-modal';
import { useDebounce } from 'react-use';
import { useWindowSize } from 'react-use';
import fetchNutritionData from './FetchNutritionData';
import { FoodTypeData } from '@/types/Food.types';
import NutritionInfo from './NutritionInfo';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '50%',
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
    height: '50%',
    width: '95%',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

const FoodSearch = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchData, setSearchData] = useState<Object[]>([]);

  // console.log(searchData);

  const [val, setVal] = useState<string | number>('');
  const [debouncedValue, setDebouncedValue] = useState<string | number>('');
  const [nutritionSearchData, setnutritionSearchData] = useState<Object>({});
  const [openExtra, setOpenExtra] = useState(false);

  // console.log(searchData)

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
    let { hits } = await fetchNutritionData(val);
    console.log(hits);

    let data: Object[] = [];

    hits.map((e: Object[]) => {
      data = [...data, e.fields];
      // console.log(data);
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

  const handleItemHighlightClick = (protein, carbs, fats) => {
    setnutritionSearchData({
      protein: protein,
      carbs: carbs,
      fats: fats,
    });
    setOpenExtra(true);
  };

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
        style={width < 768 ? mobileCustomStyles : customStyles}
        // className={styles.modal}
        contentLabel='Example Modal'
      >
        <div className='sticky top-0 mb-5 z-10 '>
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Search</h2> */}
          <div className='w-full flex justify-end relative right-2'>
            <button
              onClick={closeModal}
              className='text-2xl text-red-500 hover:text-white-900 font-bold '
            >
              X
            </button>
          </div>

          <div className='w-full flex flex-col md:flex-row justify-center items-center p-5 '>
            <input
              type='text'
              placeholder='Search...'
              className=' border-slate-800 border rounded w-full p-2 focus:outline-none '
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
                val.length === 0 && setSearchData([]);
              }}
            />
            <button
              onClick={handleSearch}
              // type='submit'
              className='w-full md:w-32 mt-2 md:mt-0 relative shadow text-xl p-1   bg-green-700 hover:bg-green-900 focus:shadow-outline focus:outline-none pb-2  text-white font-bold  rounded  align-middle  md:ml-2'
            >
              Search
            </button>
          </div>

          {/* Results */}
          {/* Load info for clicked item */}
          <div className='z-40 bg-white'>
            {openExtra && (
              <NutritionInfo nutritionSearchData={nutritionSearchData} />
            )}
          </div>
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

        {/* const { item_id, item_name, ng_calories, nf_serving_size_qty } = searchData; */}

        {val !== '' && (
          <main className='border'>
            {searchData.map((e: FoodTypeData) => {
              const {
                old_api_id,
                item_id,
                item_name,
                leg_loc_id,
                brand_id,
                brand_name,
                item_description,
                updated_at,
                nf_ingredient_statement,
                nf_water_grams,
                nf_calories,
                nf_calories_from_fat,
                nf_total_fat,
                nf_saturated_fat,
                nf_trans_fatty_acid,
                nf_polyunsaturated_fat,
                nf_monounsaturated_fat,
                nf_cholesterol,
                nf_sodium,
                nf_total_carbohydrate,
                nf_dietary_fiber,
                nf_sugars,
                nf_protein,
                nf_vitamin_a_dv,
                nf_vitamin_c_dv,
                nf_calcium_dv,
                nf_iron_dv,
                nf_refuse_pct,
                nf_servings_per_container,
                nf_serving_size_qty,
                nf_serving_size_unit,
                nf_serving_weight_grams,
                allergen_contains_milk,
                allergen_contains_eggs,
                allergen_contains_fish,
                allergen_contains_shellfish,
                allergen_contains_tree_nuts,
                allergen_contains_peanuts,
                allergen_contains_wheat,
                allergen_contains_soybeans,
                allergen_contains_gluten,
                usda_fields,
              } = e;

              return (
                <>
                  <ul className='z-0'>
                    <li className='flex cursor-pointer m-2' key={item_id}>
                      <button
                        className='focus:bg-green-400 p-1 w-screen text-left flex justify-between '
                        onClick={() =>
                          handleItemHighlightClick(
                            nf_protein,
                            nf_total_carbohydrate,
                            nf_total_fat
                          )
                        }
                      >
                        <p className='flex '>{item_name}</p>
                        <p>kcal: {nf_calories}</p>
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
