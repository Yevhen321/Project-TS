import React from 'react';
import { IconProps } from '../icon';

export interface ButtonProps {
  text: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
  width?: 'full' | 'content';
  icon?: IconProps;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
  className?: string;
  style?: React.CSSProperties;
  loading?: boolean;
}
