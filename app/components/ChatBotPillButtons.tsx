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
  const handleLoginPill = () => {
    props.actions.handleLoginPill();
  };

  return (
    <div className=''>
      <button
        className='bg-purple-800 hover:bg-purple-900 text-white px-1 rounded-full'
        onClick={() => handleLoginPill()}
      >
        <p className='p-1'>Create Account</p>
      </button>
    </div>
  );
}

