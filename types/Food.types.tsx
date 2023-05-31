export interface FoodTypeData {
  category: string;
  categoryLabel: string;
  foodId: string;
  image: string;
  knownAs: string;
  label: string;

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

export interface nutritionSearchDataType {
  carbs: number | string;
  fats: number | string;
  protein: number | string;
}


