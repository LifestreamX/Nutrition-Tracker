import { Metadata } from 'next';
import UserSettings from './UserSettings';

export const metadata: Metadata = {
  title: 'Settings',
};

const Settings: React.FC = () => {
  return <UserSettings />;
};

export default Settings;
