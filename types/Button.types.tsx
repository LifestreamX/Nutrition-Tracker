import React, { MouseEventHandler } from 'react';

export type ButtonColor = 'purple' | 'red';

export type ButtonSize = 'extra-small' | 'small' | 'medium' | 'large';

export interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  responsiveWidth: any;
}