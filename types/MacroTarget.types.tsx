// Macro taget types
export interface MacroTargetTypes {
  calories: number | string | any;
  protein: number | string;
  carbs: number | string;
  fats: number | string;
  date?: any;
  [key: string]: any;
}

export interface Goals {
  [key: string]: number | string;
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
