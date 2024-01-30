import React, { MouseEventHandler } from 'react';

export type ButtonColor = 'purple' | 'red' | 'white';

export type ButtonSize = 'extra-small' | 'small' | 'medium' | 'large' | string;

export interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  responsiveWidth?: any;
  type?: 'button' | 'submit'; // Add the 'type' property here
}
