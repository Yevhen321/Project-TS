import React from 'react';
import { ButtonProps } from './button.types';
import classes from './button.module.scss';
import clsx from 'clsx';
import { Icon } from '../icon';

export const ButtonComponent: React.FC<ButtonProps> = ({
  disabled,
  size = 'medium',
  variant = 'primary',
  type = 'button',
  text,
  icon,
  width,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        classes.btn,
        className,
        size === 'small'
          ? classes.small
          : size === 'medium'
          ? classes.medium
          : size === 'large' && classes.large,
        variant === 'secondary'
          ? classes.secondary
          : variant === 'outlined'
          ? classes.outlined
          : variant === 'primary' && classes.primary,
        width === 'full' ? classes.fullWidth : ''
      )}
      disabled={disabled}
    >
      {icon && <Icon {...icon} />}
      {text}
    </button>
  );
};

ButtonComponent.displayName = 'Button';
