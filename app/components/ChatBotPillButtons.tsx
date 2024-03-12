import React from 'react';

export function LoginPillButton(props) {
  const handleLoginPill = () => {
    props.actions.handleLoginPill();
  };

  return (
    <div className=''>
      <button
        className='bg-purple-800 hover:bg-purple-900 text-white px-1 rounded-full'
        onClick={() => handleLoginPill()}
      >
        <p className='p-1'>Signing In</p>
      </button>
    </div>
  );
}

export function SignupPillButton(props) {
  const handleSignupPill = () => {
    props.actions.handleSignupPill();
  };

  return (
    <div className=''>
      <button
        className='bg-purple-800 hover:bg-purple-900 text-white px-1 rounded-full'
        onClick={() => handleSignupPill()}
      >
        <p className='p-1'>Create Account</p>
      </button>
    </div>
  );
}

export function ContactPillButton(props) {
  const handleContactPill = () => {
    props.actions.handleContactPill();
  };

  return (
    <div className=''>
      <button
        className='bg-purple-800 hover:bg-purple-900 text-white px-1 rounded-full'
        onClick={() => handleContactPill()}
      >
        <p className='p-1'>Contact Us</p>
      </button>
    </div>
  );
}

export function AboutPillButton(props) {
  const handleABoutPill = () => {
    props.actions.handleABoutPill();
  };

  return (
    <div className=''>
      <button
        className='bg-purple-800 hover:bg-purple-900 text-white px-1 rounded-full'
        onClick={() => handleABoutPill()}
      >
        <p className='p-1'>About Us</p>
      </button>
    </div>
  );
}

export function SettingsPillButton(props) {
  const handleSettingsPill = () => {
    props.actions.handleSettingsPill();
  };

  return (
    <div className=''>
      <button
        className='bg-purple-800 hover:bg-purple-900 text-white px-1 rounded-full'
        onClick={() => handleSettingsPill()}
      >
        <p className='p-1'>Settings</p>
      </button>
    </div>
  );
}

export function NutritionFactPillButton(props) {
  const handleNutritionFactPill = () => {
    props.actions.handleNutritionFactPill();
  };

  return (
    <div className=''>
      <button
        className='bg-purple-800 hover:bg-purple-900 text-white px-1 rounded-full'
        onClick={() => handleNutritionFactPill()}
      >
        <p className='p-1'>Nutrition Fact</p>
      </button>
    </div>
  );
}

export function DashPillButton(props) {
  const handleDashPill = () => {
    props.actions.handleDashPill();
  };

  return (
    <div className=''>
      <button
        className='bg-purple-800 hover:bg-purple-900 text-white px-1 rounded-full'
        onClick={() => handleDashPill()}
      >
        <p className='p-1'>How to Log</p>
      </button>
    </div>
  );
}

export function MyFoodLogPillButton(props) {
  const MyFoodLogPillButton = () => {
    props.actions.MyFoodLogPillButton();
  };

  return (
    <div className=''>
      <button
        className='bg-purple-800 hover:bg-purple-900 text-white px-1 rounded-full'
        onClick={() => MyFoodLogPillButton()}
      >
        <p className='p-1'>My Logs</p>
      </button>
    </div>
  );
}
