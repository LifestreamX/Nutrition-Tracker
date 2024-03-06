'use client';

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

import { MacroTargetTypes } from './types/MacroTarget.types';
import { FoodTypeData, NutritionSearchDataType } from './types/Food.types';
import { FoodLogTypes } from './types/FoodLog.types';
import { FoodItemType } from './types/FoodItem.types';
import { SubmitAndDeleteActionType } from './types/Action.types';
import { SubmittedFoodLogsType } from './types/MyFoodLog.types';

type MyContextType = {
  // incrementCount: () => void;

  macroTargets: MacroTargetTypes;
  setMacroTargets: React.Dispatch<React.SetStateAction<MacroTargetTypes>>;
  macroTargetInputs: MacroTargetTypes;

  setMacroTargesInputs: React.Dispatch<React.SetStateAction<MacroTargetTypes>>;
  nutritionSearchData: NutritionSearchDataType | null;
  setNutritionSearchData: React.Dispatch<
    React.SetStateAction<NutritionSearchDataType | null>
  >;
  foodLog: FoodLogTypes[];
  setFoodLog: React.Dispatch<
    React.SetStateAction<FoodLogTypes | object[] | ReactNode | any>
  >;
  successAdded: boolean;
  setSuccessAdded: React.Dispatch<React.SetStateAction<boolean>>;
  clikedEditId: string;
  setClikedEditId: React.Dispatch<React.SetStateAction<string>>;
  foodItem: FoodItemType;
  setFoodItem: React.Dispatch<React.SetStateAction<FoodItemType>>;
  selectedDate: Date | null | string;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null | string>>;
  dispatch: Dispatch<SubmitAndDeleteActionType>;
  submittedFoodLogs: SubmittedFoodLogsType[];
  profileAvatar: string | null | undefined;
  setProfileAvatar: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
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
  // const [macroTargets, setMacroTargets] = useState(() => {
  //   let savedMacroTargets;

  //   if (typeof window !== 'undefined') {
  //     savedMacroTargets = localStorage.getItem('macroTargets');
  //   }

  //   return savedMacroTargets
  //     ? JSON.parse(savedMacroTargets)
  //     : {
  //         calories: 0,
  //         protein: 0,
  //         carbs: 0,
  //         fats: 0,
  //       };
  // });

  const [macroTargets, setMacroTargets] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  });

  useEffect(() => {
    const fetchMacroTargets = async () => {
      try {
        const res = await fetch('/api/macrotargets', {
          method: 'GET', // specifying GET method explicitly
        });

        if (res.ok) {
          const data = await res.json();
          setMacroTargets(data);
          setMacroTargesInputs({
            calories: data.calories || 0,
            protein: data.protein || 0,
            carbs: data.carbs || 0,
            fats: data.fats || 0,
          });
        } else {
          console.error('Failed to fetch macro targets:', res);
        }
      } catch (error) {
        console.error('Failed to fetch macro targets:', error);
      }
    };

    const fetchSelectedDate = async () => {
      try {
        const res = await fetch('/api/selectedDate', {
          method: 'GET', // specifying GET method explicitly
        });
        if (res.ok) {
          const data = await res.text();

          setSelectedDate(data);
        } else {
          console.error('Failed to fetch selected date:', res);
        }
      } catch (error) {
        console.error('Failed to fetch selected date:', error);
      }
    };

    const fetchProfileAvatar = async () => {
      try {
        const res = await fetch('/api/profileAvatar', {
          method: 'GET',
        });

        if (res.ok) {
          const data = await res.text();
          console.log(data);

          if (data === 'empty') {
            setProfileAvatar(null);
          } else {
            setProfileAvatar(data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch profile avatar');
      }
    };

    console.log(profileAvatar);

    const fetchFoodLog = async () => {
      try {
        const res = await fetch('/api/foodLog', {
          method: 'GET',
        });
        // console.log(res);

        if (res.ok) {
          const data = await res.json();
          setFoodLog(data);
        }
      } catch (error) {
        console.error('Failed to fetch food log');
      }
    };

    const fetchSubmittedFoodLogs = async () => {
      try {
        const res = await fetch('/api/submittedFoodLogs', {
          method: 'GET',
        });

        if (res.ok) {
          const data = await res.json();
          dispatch({ type: 'SET_SUBMITTED_FOOD_LOGS', payload: data }); // Dispatch action to update state
          console.log(submittedFoodLogs);
        }
      } catch (error) {
        console.error('Failed to fetch food log');
      }
    };

    fetchSubmittedFoodLogs();
    fetchSelectedDate();
    fetchMacroTargets();
    fetchProfileAvatar();
    fetchFoodLog();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  let [profileAvatar, setProfileAvatar] = useState<string | null>();

  // let [profileAvatar, setProfileAvatar] = useState(() => {
  //   let savedProfileAvatar;

  //   if (typeof window !== 'undefined') {
  //     savedProfileAvatar = localStorage.getItem('profileAvatar');
  //   }

  //   if (savedProfileAvatar !== undefined && savedProfileAvatar !== null) {
  //     return savedProfileAvatar;
  //   } else return;
  // });

  const [macroTargetInputs, setMacroTargesInputs] = useState({
    calories: macroTargets.calories || 0,
    protein: macroTargets.protein || 0,
    carbs: macroTargets.carbs || 0,
    fats: macroTargets.fats || 0,
  });
  const [nutritionSearchData, setNutritionSearchData] =
    useState<NutritionSearchDataType | null>(null);

  // const [foodLog, setFoodLog] = useState([]);

  const [successAdded, setSuccessAdded] = useState(false);

  const [clikedEditId, setClikedEditId] = useState('null');

  const [foodItem, setFoodItem] = useState({});

  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // const [foodLog, setFoodLog] = useState(() => {
  //   let savedFoodLog = null;

  //   if (typeof window !== 'undefined') {
  //     savedFoodLog = localStorage.getItem('foodLog');
  //   }

  //   return savedFoodLog ? JSON.parse(savedFoodLog) : [];
  // });
  const [foodLog, setFoodLog] = useState([]);

  // const [selectedDate, setSelectedDate] = useState(() => {
  //   let savedSelectedDate;

  //   if (typeof window !== 'undefined') {
  //     savedSelectedDate = localStorage.getItem('selectedDate');
  //   }

  //   return savedSelectedDate && savedSelectedDate !== undefined
  //     ? JSON.parse(savedSelectedDate)?.toString()
  //     : null;
  // });

  const [selectedDate, setSelectedDate] = useState<Date | null | string>(null);

  const reducer = (
    state: FoodTypeData[],
    action: SubmitAndDeleteActionType
  ) => {
    switch (action.type) {
      case 'SET_SUBMITTED_FOOD_LOGS': // New action type to set submitted food logs
        return action.payload; // Set state to the fetched data
      case 'SUBMIT_FOOD_LOGS':
        const newLogs = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];
        return [...state, ...newLogs];
      case 'DELETE_FOOD_LOG':
        return action.payload;
      default:
        return state;
    }
  };

  const [submittedFoodLogs, dispatch] = useReducer(reducer, []);

  // let storedSubmittedFoodLogData;

  // if (typeof window !== 'undefined') {
  //   storedSubmittedFoodLogData = localStorage.getItem('submittedFoodLogs');
  // }

  // const initialFoodLogData = storedSubmittedFoodLogData
  //   ? JSON.parse(storedSubmittedFoodLogData)
  //   : [];

  // const [submittedFoodLogs, dispatch] = useReducer(reducer, initialFoodLogData);

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

  // const sendFoodLogToServer = async (foodLog: FoodLogTypes) => {
  //   try {
  //     const res = await fetch('/api/foodLog', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ foodLog }),
  //     });

  //     // console.log(res)

  //     if (!res) {
  //       throw new Error('Failed to save food logs to the server ');
  //     }

  //     const data = await res.json();

  //     // console.log(data);
  //   } catch (error) {
  //     console.error('Error saving food logs to the server', error);
  //   }
  // };

  // useEffect(() => {
  //   // localStorage.setItem('foodLog', JSON.stringify(foodLog));
  //   sendFoodLogToServer(foodLog as any);
  // }, [foodLog]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
