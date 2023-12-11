import { Params } from '@/types/MyFoodLog.types';
import { Metadata } from 'next';
import FoodDetailsLogic from './FoodDetailsLogic';

export const metadata: Metadata = {
  title: 'Food Details',
  description: 'users food log details',
};

type MyFoodLogProps = {
  params: Params;
};

const FoodLogDetails: React.FC<MyFoodLogProps> = ({ params }) => {
  return (
    <>
      <FoodDetailsLogic params={params} />;
    </>
  );
};

export default FoodLogDetails;
