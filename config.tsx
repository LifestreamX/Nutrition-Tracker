'use client';

// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './app/components/ChatBotWidget';
import Sushi from './public/images/sushi.png';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { useMyContext } from '@/MyContext';
import { LoginPillButton } from './app/components/ChatBotPillButtons';

const botName = 'Sussy Sushi';

const CustomBotAvatar = (props) => {
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

  // let chatUserAvatar = useSession !== null ? userSession?.user?.image : null;

  return (
    <Image
      src={profileAvatar} // Use the imported PNG image as the source
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
      widget: 'LoginPillButton',
      widget: 'SignupPillButton',
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
    botAvatar: (props) => <CustomBotAvatar {...props} />,

    userAvatar: (props) => <MyUserAvatar {...props} />,
  },

  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },

    {
      widgetName: 'LoginPillButton',
      widgetFunc: (props) => <LoginPillButton {...props} />,
    },
  ],
};

export default config;
