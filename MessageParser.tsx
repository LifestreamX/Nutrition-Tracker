import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = async (message) => {
    const lowercaseMessage = message.toLowerCase();

    if (
      lowercaseMessage.includes('hello') ||
      lowercaseMessage.includes('hi') ||
      lowercaseMessage.includes('greetings') ||
      lowercaseMessage.includes('yo') ||
      lowercaseMessage.includes('whats up') ||
      lowercaseMessage.includes('hey')
    ) {
      actions.handleHello();
    } else if (
      lowercaseMessage.includes('bye') ||
      lowercaseMessage.includes('see you') ||
      lowercaseMessage.includes('goodbye') ||
      lowercaseMessage.includes('adios') ||
      lowercaseMessage.includes('take care') ||
      lowercaseMessage.includes('im all done') ||
      lowercaseMessage.includes('take care')
    ) {
      actions.handleGoodbye();
    } else if (
      lowercaseMessage.includes('log in') ||
      lowercaseMessage.includes('signing in') ||
      lowercaseMessage.includes('login') ||
      lowercaseMessage.includes('signin') ||
      lowercaseMessage.includes('how do i log in') ||
      lowercaseMessage.includes('how do i login') ||
      lowercaseMessage.includes('how do i sign in') ||
      lowercaseMessage.includes('how do i signin')
    ) {
      actions.handleLoginPill();
    } else if (
      lowercaseMessage.includes('signup') ||
      lowercaseMessage.includes('signing up') ||
      lowercaseMessage.includes('new account') ||
      lowercaseMessage.includes('create a account') ||
      lowercaseMessage.includes('account')
    ) {
      actions.handleSignupPill();
    } else if (
      lowercaseMessage.includes('contact') ||
      lowercaseMessage.includes('email') ||
      lowercaseMessage.includes('contact you') ||
      lowercaseMessage.includes('need to contact')
    ) {
      actions.handleContactPill();
    } else if (
      lowercaseMessage.includes('what do you do') ||
      lowercaseMessage.includes('about') ||
      lowercaseMessage.includes('what is nutritiontracker')
    ) {
      actions.handleABoutPill();
    } else if (
      lowercaseMessage.includes('settings') ||
      lowercaseMessage.includes('change settings') ||
      lowercaseMessage.includes('where can i change my settings')
    ) {
      actions.handleSettingsPill();
    } else if (
      lowercaseMessage.includes('facts') ||
      lowercaseMessage.includes('fact') ||
      lowercaseMessage.includes('give me a nutrition fact') ||
      lowercaseMessage.includes('fun fact') ||
      lowercaseMessage.includes('teach me')
    ) {
      actions.handleNutritionFactPill();
    } else if (
      lowercaseMessage.includes('dashboard') ||
      lowercaseMessage.includes('dash') ||
      lowercaseMessage.includes('where is the dashboard')
    ) {
      actions.handleDashPill();
    } else if (
      lowercaseMessage.includes('my food logs') ||
      lowercaseMessage.includes('where are my food logs stored') ||
      lowercaseMessage.includes('food logs') ||
      lowercaseMessage.includes('logs')
    ) {
      actions.MyFoodLogPillButton();
    } else if (lowercaseMessage.length === 0) {
      actions.handleEmptyText();
    } else if (lowercaseMessage.includes('dog')) {
      actions.handleDog();
    } else {
      actions.handleNoMatch();
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
