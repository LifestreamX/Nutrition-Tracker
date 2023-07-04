// Macro taget types
export interface MacroTargetTypes {
  calories: number | string;
  protein: number | string;
  carbs: number | string;
  fats: number | string;
  date?: any;
}

export interface Goals {
  [key: string]: number | string;
}

interface CaloriesConsumedData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface CaloriesRemainData {
  labels: string[];
  datasets: {
    data: (number | string)[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}
