import { Metadata } from 'next';
import FoodLogDataLogic from './components/FoodLogDataLogic';
import { Params } from '@/types/MyFoodLog.types';

type MyFoodLogProps = {
  params: Params;
};

export const metadata: Metadata = {
  title: 'Food Log',
};

const MyFoodLog: React.FC<MyFoodLogProps> = ({ params }) => {

  return <FoodLogDataLogic params={params} />;
};

export default MyFoodLog;
