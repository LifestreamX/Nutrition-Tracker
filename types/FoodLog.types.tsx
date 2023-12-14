// Macro taget types
export interface FoodLogTypes {
  forEach(arg0: (food: FoodLogTypes) => void): unknown;
  map(arg0: (food: any) => JSX.Element): import('react').ReactNode;
  reduce(
    arg0: (acc: number, cur: { calories: number }) => number,
    arg1: number
  ): unknown;

  foodLogId: number;

  FIBTG: number;
  calories: number;
  carbs: number;
  category: string;
  categoryLabel: string;
  fats: number;
  foodId: string;
  image: string | undefined;
  knownAs: string;
  label: string;
  quantity: number | undefined;
  nutrients: {
    ENERC_KCAL: number;
    PROCNT: number;
    FAT: number;
    CHOCDF: number;
    FIBTG: number;
  };
  protein: number;
  servingSizes?: object | undefined;
}
