import 'react-loading-skeleton/dist/skeleton.css';
import { Metadata } from 'next';
import MyFoodLogsData from './MyFoodLogsData';

export const metadata: Metadata = {
  title: 'My Food Logs',
  description: 'users food logs',
};

const MyFoodLogs: React.FC = () => {
  return (
    <section className='w-full flex justify-center items-middle relative top-10 md:top-40'>
      <div className='bg-white w-full  flex flex-col justify-center items-center p-10 dark:bg-gray-800'>
        <MyFoodLogsData />
      </div>
    </section>
  );
};

export default MyFoodLogs;
