import 'react-loading-skeleton/dist/skeleton.css';
import { Metadata } from 'next';
import MyFoodLogsData from './MyFoodLogsData';

export const metadata: Metadata = {
  title: 'My Food Logs',
};

const MyFoodLogs: React.FC = () => {
  return <MyFoodLogsData />;
};

export default MyFoodLogs;
