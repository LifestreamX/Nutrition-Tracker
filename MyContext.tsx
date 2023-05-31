'use client';

import { createContext, useContext, useState } from 'react';
import { MacroTargetTypes } from './types/MacroTarget.types';

type MyContextType = {
  // count: number;
  // incrementCount: () => void;

  macroTargets: MacroTargetTypes;
  setMacroTargets: React.Dispatch<React.SetStateAction<MacroTargetTypes>>;
  macroTargetInputs: MacroTargetTypes;
  setMacroTargesInputs: React.Dispatch<React.SetStateAction<MacroTargetTypes>>;
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
    // date: '',
  });

  const [macroTargetInputs, setMacroTargesInputs] = useState({
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
    // date: '',
  });

  // const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  const value: MyContextType = {
    // count,
    // incrementCount,
    macroTargets,
    setMacroTargets,
    macroTargetInputs,
    setMacroTargesInputs,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
