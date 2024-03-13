'use client';

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from '@/MessageParser';
import ActionProvider from '@/ActionProvider';
import config from '@/config';
import { useState } from 'react';

const ChatBot = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbotVisibility = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const ConfigType = {};

  return (
    <div className='flex flex-col justify-end items-end'>
      {isChatbotVisible && (
        <>
          <Chatbot
            config={config as any}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </>
      )}

      <button onClick={toggleChatbotVisibility}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#581C87'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-12 h-12 chatbot-svg relative left-7 md:left-0  text-white transform hover:scale-110 transition-transform'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z'
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatBot;
