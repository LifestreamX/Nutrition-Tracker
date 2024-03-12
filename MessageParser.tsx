import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = async (message) => {
    if (
      message.includes('hello') ||
      message.includes('hi') ||
      message.includes('greetings') ||
      message.includes('yo') ||
      message.includes('whats up')
    ) {
      actions.handleHello();
    }

    if (
      message.includes('bye') ||
      message.includes('see you') ||
      message.includes('goodbye') ||
      message.includes('audios') ||
      message.includes('take care') ||
      message.includes('im all done') ||
      message.includes('take care')
    ) {
      actions.handleGoodbye();
    }

    if (
      message.includes('log in') ||
      message.includes('signing in') ||
      message.includes('login') ||
      message.includes('signin') ||
      message.includes('how do i log in') ||
      message.includes('how do i login') ||
      message.includes('how do i sign in') ||
      message.includes('how do i signin')
    ) {
      actions.handleLoginPill();
    }

    if (
      message.includes('signup') ||
      message.includes('signing up') ||
      message.includes('new account') ||
      message.includes('create a account') ||
      message.includes('account')
    ) {
      actions.handleSignupPill();
    }

    if (
      message.includes('contact') ||
      message.includes('email') ||
      message.includes('contact you') ||
      message.includes('need to contact')
    ) {
      actions.handleContactPill();
    }

    if (
      message.includes('what do you do') ||
      message.includes('about') ||
      message.includes('what is nutritiontracker')
    ) {
      actions.handleABoutPill();
    }

    if (
      message.includes('settings') ||
      message.includes('change settings') ||
      message.includes('where can i change my settings')
    ) {
      actions.handleSettingsPill();
    }

    if (
      message.includes('facts') ||
      message.includes('give me a nutrition fact') ||
      message.includes('fun fact') ||
      message.includes('teach me')
    ) {
      actions.handleNutritionFactPill();
    }

    if (
      message.includes('dashboard') ||
      message.includes('dash') ||
      message.includes('where is the dashboard')
    ) {
      actions.handleDashPill();
    }

    if (
      message.includes('my food logs') ||
      message.includes('where are my food logs stored') ||
      message.includes('food logs') ||
      message.includes('logs')
    ) {
      actions.MyFoodLogPillButton();
    }

    if (message.length === 0) {
      actions.handleEmptyText();
    }

    if (message.includes('dog')) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
