'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  MacroTargetTypes,
  NutritionSearchDataType,
} from './types/MacroTarget.types';
import { FoodTypeData } from './types/Food.types';

type MyContextType = {
  // incrementCount: () => void;

  macroTargets: MacroTargetTypes;
  setMacroTargets: React.Dispatch<
    React.SetStateAction<MacroTargetTypes | object>
  >;
  macroTargetInputs: MacroTargetTypes;
  setMacroTargesInputs: React.Dispatch<React.SetStateAction<MacroTargetTypes>>;
  nutritionSearchData: NutritionSearchDataType;
  setnutritionSearchData: React.Dispatch<
    React.SetStateAction<NutritionSearchDataType>
  >;
  foodLog: FoodTypeData;
  setFoodLog: React.Dispatch<
    React.SetStateAction<FoodTypeData | object[] | ReactNode>
  >;
  successAdded: Boolean;
  setSuccessAdded: React.Dispatch<React.SetStateAction<Boolean>>;
  clikedEditId: string;
  setClikedEditId: React.Dispatch<React.SetStateAction<string | null>>;
  foodItem: any;
  setFoodItem: React.Dispatch<React.SetStateAction<any>>;
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null | string[]>>;
  dispatch: any;
  submittedFoodLogs: any;
  profileAvatar: any;
  setProfileAvatar: any;
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
  // const [macroTargets, setMacroTargets] = useState({
  //   calories: '',
  //   protein: '',
  //   carbs: '',
  //   fats: '',
  // });

  const [macroTargets, setMacroTargets] = useState(() => {
    const savedMacroTargets = localStorage.getItem('macroTargets');
    return savedMacroTargets
      ? JSON.parse(savedMacroTargets)
      : {
          calories: '',
          protein: '',
          carbs: '',
          fats: '',
        };
  });

  const [macroTargetInputs, setMacroTargesInputs] = useState({
    calories: macroTargets.calories || '',
    protein: macroTargets.protein || '',
    carbs: macroTargets.carbs || '',
    fats: macroTargets.fats || '',
  });

  const [nutritionSearchData, setNutritionSearchData] = useState();

  // const [foodLog, setFoodLog] = useState([]);

  const [successAdded, setSuccessAdded] = useState(false);

  const [clikedEditId, setClikedEditId] = useState('');

  const [foodItem, setFoodItem] = useState(null);

  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [foodLog, setFoodLog] = useState(() => {
    const savedFoodLog = localStorage.getItem('foodLog');
    return savedFoodLog ? JSON.parse(savedFoodLog) : [];
  });

  const [selectedDate, setSelectedDate] = useState(() => {
    const savedSelectedDate = localStorage.getItem('selectedDate');
    return savedSelectedDate && savedSelectedDate !== undefined
      ? JSON.parse(savedSelectedDate)?.toString()
      : null;
  });

  type Action = {
    type: 'SUBMIT_FOOD_LOGS';
    payload: FoodTypeData[];
  };

  const reducer = (state: FoodTypeData[], action: Action) => {
    switch (action.type) {
      case 'SUBMIT_FOOD_LOGS':
        return [...state, action.payload];
      case 'DELETE_FOOD_LOG':
        return action.payload;
      default:
        return state;
    }
  };

  const [submittedFoodLogs, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('submittedFoodLogs')) || []
  );

  useEffect(() => {
    localStorage.setItem(
      'submittedFoodLogs',
      JSON.stringify(submittedFoodLogs)
    );
  }, [submittedFoodLogs]);

  // profile avatar
  let [profileAvatar, setProfileAvatar] = useState(() => {
    const savedProfileAvatar = localStorage.getItem('profileAvatar');

    if (savedProfileAvatar !== undefined) {
      return savedProfileAvatar;
    } else return;
  });

  const value: MyContextType = {
    macroTargetInputs,
    setMacroTargesInputs,
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
    selectedDate,
    setSelectedDate,
    submittedFoodLogs,
    dispatch,
    profileAvatar,
    setProfileAvatar,
  };

  // Local Storage

  useEffect(() => {
    localStorage.setItem('foodLog', JSON.stringify(foodLog));
  }, [foodLog]);

  // useEffect(() => {
  //   localStorage.setItem('selectedDate', JSON.stringify(selectedDate));
  // }, [selectedDate]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
