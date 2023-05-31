import React, { useState } from 'react';
import { useMyContext } from '../../../MyContext';

const MacroGoals = () => {
  const {
    macroTargets,
    setMacroTargets,
    macroTargetInputs,
    setMacroTargesInputs,
  } = useMyContext();
  const [showMacroForm, setShowMacroForm] = useState(false);
  //   const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setMacroTargesInputs((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setMacroTargets({
      ...macroTargets,
      calories: macroTargetInputs.calories,
      protein: macroTargetInputs.protein,
      carbs: macroTargetInputs.carbs,
      fats: macroTargetInputs.fats,
    });

    setMacroTargesInputs({
      ...macroTargetInputs,
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    });
  };

  const handleCancel = () => {
    setMacroTargesInputs({
      ...macroTargetInputs,
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    });
  };

  console.log(macroTargetInputs);

  //   console.log(macroTargets);
  //   console.log(macroTargetInputs);

  return (
    <section>
      {/* Button for setting the target goals  */}
      <div className='flex items-center justify-center mt-20'>
        {!showMacroForm && (
          <button
            onClick={() => setShowMacroForm(true)}
            className='bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded'
          >
            Set Macronutrients Goals
          </button>
        )}

        {showMacroForm && (
          <form
            action=''
            className='bg-white rounded-lg shadow-lg flex flex-col'
          >
            <div>
              <label htmlFor='macroCalories'>Calories</label>
              <input
                type='number'
                name='calories'
                id='macroCalories'
                value={macroTargetInputs.calories}
                onChange={handleInputChange}
                className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            <div>
              <label htmlFor='macroProtein'>Protein</label>
              <input
                type='number'
                name='protein'
                id='macroProtein'
                value={macroTargetInputs.protein}
                onChange={handleInputChange}
                className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>
            <div>
              <label htmlFor='macroCarbs'>Carbs</label>
              <input
                type='number'
                name='carbs'
                id='macroCarbs'
                value={macroTargetInputs.carbs}
                onChange={handleInputChange}
                className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            <div>
              <label htmlFor='macroFats'>Fats</label>
              <input
                type='number'
                name='fats'
                id='macroFats'
                value={macroTargetInputs.fats}
                onChange={handleInputChange}
                className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>
            {/* <div>
              <input
                id='date'
                value={macroTargets.fats}
                onChange={handleInputChange}
                type='date'
              />
            </div> */}

            <div>
              <button
                type='button'
                onClick={() => {
                  setShowMacroForm(false);
                  handleSubmit();
                }}
                className='bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded'
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowMacroForm(false);
                  handleCancel();
                }}
                className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* for Calories Burned / calories consumed  / calories remaining targets */}
        <div className='w-64 h-32 bg-white rounded-lg shadow-lg'>
          <ul>Calories:{macroTargets.calories}</ul>
        </div>
      </div>
    </section>
  );
};

export default MacroGoals;
