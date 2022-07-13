import React from 'react';
import { IconProps } from '../icon';

export interface InputProps {
  label?: string;
  type?: 'text' | 'password';
  leftLabel?: string;
  value?: string | number;
  width?: 'full' | 'content';
  className?: string;
  icon?: IconProps;
  style?: React.CSSProperties;
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onKeyDown?: (e: React.KeyboardEvent<any>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  ref?: React.RefObject<HTMLInputElement> | undefined;
  errorMessage?: string;
  showError?: boolean;
  onClick?: (event: React.SetStateAction<string>) => void;
  disabled?: boolean;
}
