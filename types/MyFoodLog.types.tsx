import { FoodLogTypes } from './FoodLog.types';

export type Params = {
  foodlog: string;
  foodLog: string;
  foodlogdetails: string;
};

// specific Log types
export type specificFoodLogTypes = {
  map(arg0: (log: any) => any): unknown;
  filter(arg0: (e: { foodLogId: string; }) => boolean): unknown;
  find(arg0: (e: { foodLogId: string; foodLog: FoodLogTypes[]; }) => any): unknown;
  slice(indexOfFirstResult: number, indexOfLastResult: number): specificFoodLogTypes[];
  length: number;
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
