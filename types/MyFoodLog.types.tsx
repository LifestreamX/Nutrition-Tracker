import { FoodLogTypes } from './FoodLog.types';

export type SubmittedFoodLogsType = {
  foodId: string;
  find(arg0: (log: any) => boolean): any;
  foodLog: FoodLogTypes;
  foodLogId: string;
  selectedDate: string[];
};

export type Params = {
  foodlog: string;
  foodLog: string;
  foodlogdetails: string;
};

// specific Log types
export type specificFoodLogTypes = {
  foodLogId: string;
  selectedDate: string[];
  foodLog: FoodLogTypes;
};

export type CancelHandler = (e: React.MouseEvent<HTMLButtonElement>) => void;

export type ConfirmDeleteHandler = (
  e: React.MouseEvent<HTMLButtonElement>
) => void;

//  specific log details types
export type specificFoodLogDetailsTypes = {
  logDetails: any;
  ounces: number;
  grams: number;
};
