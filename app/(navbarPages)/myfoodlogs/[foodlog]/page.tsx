import { Metadata } from 'next';
import FoodLogDataLogic from './components/FoodLogDataLogic';
import { Params } from '@/types/MyFoodLog.types';

type MyFoodLogProps = {
  params: Params;
};

export const metadata: Metadata = {
  title: 'Food Log',
  description: 'users food log',
};

const MyFoodLog: React.FC<MyFoodLogProps> = ({ params }) => {
  return (
    <div className='w-full flex justify-center items-middle relative top-40 p-5 '>
      <FoodLogDataLogic params={params} />;
    </div>
  );
};

export default MyFoodLog;
