export interface FoodTypeData {
  reduce(arg0: (acc: any, cur: any) => any, arg1: number): unknown;
  length: number;
  find(arg0: (food: any) => boolean): unknown;
  filter(arg0: (food: any) => boolean): FoodTypeData;
  map(
    arg0: (food: import('./FoodLog.types').FoodLogTypes) => JSX.Element
  ): import('react').ReactNode;
  category: string;
  categoryLabel: string;
  foodId: string;
  image: string;
  knownAs: string;
  label: string;
  calories: number | string;
  quantity: number;

  nutrients: {
    CHOCDF: number;
    ENERC_KCAL: number;
    FAT: number;
    FIBTG: number;
    PROCNT: number;
  };

  servingSizes: {
    forEach(arg0: (e: ServingsType) => void): unknown;
    uri: string;
    label: string;
    quantity: number;
  };
}

export interface ServingsType {
  uri: string;
  label: string;
  quantity: number;
}

export interface NutritionSearchDataType {
  carbs: number;
  fats: number;
  protein: number;
  calories: number;
  FIBTG: number;
  category: string;
  categoryLabel: string;
  foodId: string;
  image: string;
  knownAs: string;
  label: string;
  nutrients: {};
  servingSizes: {};
  quantity: number;
}

export interface NutritonSearchDataServinvgSizes {
  CHOCDF: number;
  ENERC_KCAL: number;
  FAT: number;
  FIBTG: number;
  PROCNT: number;
}

export interface ApiResponse {
  hints: { food: NutritionSearchDataType }[];
}
