// Macro taget types
export interface FoodLogTypes {
  FIBTG: number;
  calories: number;
  carbs: number;
  category: string;
  categoryLabel: string;
  fats: number;
  foodId: string;
  image: string;
  knownAs: string;
  label: string;
  quantity: number;
  nutrients: {
    ENERC_KCAL: number;
    PROCNT: number;
    FAT: number;
    CHOCDF: number;
    FIBTG: number;
  };
  protein: number;
  servingSizes: object;
}
