// Macro taget types
export interface MacroTargetTypes {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  date?: any;
  [key: string]: any;
}

export interface Goals {
  [key: string]: number;
}

export interface CaloriesConsumedData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

export interface CaloriesRemainData {
  labels: string[];
  datasets: {
    data: (number | string)[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}
