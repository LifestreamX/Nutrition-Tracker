'use client';

// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './app/components/ChatBotWidget';
import Sushi from './public/images/sushi.png';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { useMyContext } from '@/MyContext';
import {
  AboutPillButton,
  ContactPillButton,
  DashPillButton,
  LoginPillButton,
  MyFoodLogPillButton,
  NutritionFactPillButton,
  SettingsPillButton,
  SignupPillButton,
} from './app/components/ChatBotPillButtons';

const botName = 'Sussy Sushi';

const CustomBotAvatar = (props: any) => {
  return (
    <Image
      src={Sushi} // Use the imported PNG image as the source
      alt='Bot Avatar'
      style={{
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        marginRight: '10px',
      }} // Add right margin to create space between avatar and text
    />
  );
};

const MyUserAvatar = () => {
  const { profileAvatar } = useMyContext();

  const defaultAvatar = `data:image/svg+xml;utf8,<svg
  className='absolute w-10 h-10 text-gray-400 -left-1'
  fill='currentColor'
  viewBox='0 0 20 20'
  xmlns='http://www.w3.org/2000/svg'
  data-testid='avatar'
>
  <path
    fillRule='evenodd'
    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
    clipRule='evenodd'
  ></path>
</svg>`;

  return (
    <Image
      src={profileAvatar ? profileAvatar : defaultAvatar} // Use the imported PNG image as the source
      alt='Bot Avatar'
      width={45}
      height={45}
      style={{
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        marginLeft: '10px',
      }} // Add right margin to create space between avatar and text
    />
  );
};

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}! How can I help you`, {
      widget: 'pillButtons',
      // widget: 'SignupPillButton',
    }),
  ],

  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#6B21A8',
    },
    chatButton: {
      backgroundColor: '#6B21A8',
    },
  },

  customComponents: {
    // Replace the default bot avatar component with the custom one
    botAvatar: (props: any) => <CustomBotAvatar {...props} />,

    userAvatar: (props: JSX.IntrinsicAttributes) => <MyUserAvatar {...props} />,
  },

  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props: JSX.IntrinsicAttributes) => <DogPicture {...props} />,
    },

    {
      widgetName: 'pillButtons',
      widgetFunc: (props: any) => (
        <div className='flex flex-wrap '>
          <p className='p-1 text-sm'>
            <LoginPillButton {...props} />
          </p>
          <p className='p-1 text-sm'>
            <AboutPillButton {...props} />
          </p>
          <p className='p-1 text-sm'>
            <SignupPillButton {...props} />
          </p>
          <p className='p-1 text-sm'>
            <SettingsPillButton {...props} />
          </p>
          <p className='p-1 text-sm'>
            <ContactPillButton {...props} />
          </p>

          <p className='p-1 text-sm'>
            <NutritionFactPillButton {...props} />
          </p>
          <p className='p-1 text-sm'>
            <DashPillButton {...props} />
          </p>
          <p className='p-1 text-sm'>
            <MyFoodLogPillButton {...props} />
          </p>
        </div>
      ),
    },

    // {
    //   widgetName: 'LoginPillButton',
    //   widgetFunc: (props) => <LoginPillButton {...props} />,
    // },
  ],
};

export default config;
