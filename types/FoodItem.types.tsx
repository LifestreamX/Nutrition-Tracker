export interface FoodItemType {
  FIBTG?: number;
  calories?: number;
  carbs?: number;
  category?: string;
  categoryLabel?: string;
  fats?: number;
  foodId?: string;
  image?: string | undefined;
  knownAs?: string;
  label?: string;
  quantity?: number;
  nutrients?: {
    ENERC_KCAL?: number;
    PROCNT?: number;
    FAT?: number;
    CHOCDF?: number;
    FIBTG?: number;
  };
  protein?: number;
  servingSizes?: object | undefined;
}
