'use client';

import { createContext, useContext, useState } from 'react';
import {
  MacroTargetTypes,
  NutritionSearchDataType,
} from './types/MacroTarget.types';
import { FoodTypeData } from './types/Food.types';

type MyContextType = {
  // incrementCount: () => void;

  macroTargets: MacroTargetTypes;
  setMacroTargets: React.Dispatch<React.SetStateAction<MacroTargetTypes>>;
  macroTargetInputs: MacroTargetTypes;
  setMacroTargesInputs: React.Dispatch<React.SetStateAction<MacroTargetTypes>>;
  nutritionSearchData: NutritionSearchDataType;
  setnutritionSearchData: React.Dispatch<
    React.SetStateAction<NutritionSearchDataType>
  >;
  foodLog: FoodTypeData;
  setFoodLog: React.Dispatch<React.SetStateAction<FoodTypeData>>;
  successAdded: Boolean;
  setSuccessAdded: React.Dispatch<React.SetStateAction<Boolean>>;
  clikedEditId: string;
  setClikedEditId: React.Dispatch<React.SetStateAction<string>>;
  foodItem: any;
  setFoodItem: React.Dispatch<React.SetStateAction<any>>;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

type MyProviderProps = {
  children: React.ReactNode;
};

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [macroTargets, setMacroTargets] = useState({
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });

  const [nutritionSearchData, setNutritionSearchData] = useState();

  const [foodLog, setFoodLog] = useState([]);

  const [successAdded, setSuccessAdded] = useState(false);

  const [clikedEditId, setClikedEditId] = useState('');

  const [foodItem, setFoodItem] = useState(null);

  const value: MyContextType = {
    macroTargets,
    setMacroTargets,
    nutritionSearchData,
    setNutritionSearchData,
    foodLog,
    setFoodLog,
    successAdded,
    setSuccessAdded,
    clikedEditId,
    setClikedEditId,
    foodItem,
    setFoodItem,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
