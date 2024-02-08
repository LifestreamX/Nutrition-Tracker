import { Params } from '@/types/MyFoodLog.types';
import { Metadata } from 'next';
import FoodDetailsLogic from './FoodDetailsLogic';

type MyFoodLogProps = {
  params: Params;
};

export const metadata: Metadata = {
  title: 'Food Details',
  description: 'users food log details ',
};

const FoodLogDetails: React.FC<MyFoodLogProps> = ({ params }) => {
  return (
    <>
      <FoodDetailsLogic params={params} />
    </>
  );
};

export default FoodLogDetails;
