import { FoodLogTypes } from './FoodLog.types';

export interface Params {
  foodlog: string;
  foodLog: string;
  foodlogdetails: string;
}

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
