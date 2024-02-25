import { FoodTypeData } from './Food.types';
import { FoodLogTypes } from './FoodLog.types';
import { SubmittedFoodLogsType } from './MyFoodLog.types';

// type SubmitFoodLogsPayload = {
//   foodLogId: string | number;
//   selectedDate: Date | null;
//   foodLog: FoodLogTypes[];
// };

// actionTypes.ts
// actionTypes.ts
export type SubmitAndDeleteActionType =
  | {
      type: 'SUBMIT_FOOD_LOGS';
      payload: {
        foodLogId: string | number;
        selectedDate: Date | null;
        foodLog: FoodLogTypes[];
      };
    }
  | { type: 'DELETE_FOOD_LOG'; payload: SubmittedFoodLogsType[] }
  | { type: 'SET_SUBMITTED_FOOD_LOGS'; payload: SubmittedFoodLogsType[] };

// export type Action = {
//   type: 'SUBMIT_FOOD_LOGS' | 'DELETE_FOOD_LOG';
//   payload: {
//     foodLogId: string | number;
//     selectedDate: Date | null;
//     foodLog: FoodLogTypes[];
//   };
// };
