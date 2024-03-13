import React from 'react';
import '../globals.css';

export function LoginPillButton(props: { actions: { handleLoginPill: () => void; }; }) {
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

export function SignupPillButton(props: { actions: { handleSignupPill: () => void; }; }) {
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

export function ContactPillButton(props: { actions: { handleContactPill: () => void; }; }) {
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

export function AboutPillButton(props: { actions: { handleABoutPill: () => void; }; }) {
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

export function SettingsPillButton(props: { actions: { handleSettingsPill: () => void; }; }) {
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

export function NutritionFactPillButton(props: { actions: { handleNutritionFactPill: () => void; }; }) {
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

export function DashPillButton(props: { actions: { handleDashPill: () => void; }; }) {
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

export function MyFoodLogPillButton(props: { actions: { MyFoodLogPillButton: () => void; }; }) {
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
