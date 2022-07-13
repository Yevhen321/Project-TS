import React, { useState } from 'react';
import { IconTypes } from '../../data/icons';
import { Input } from '../input';
import { InputPasswordProps } from './input-password.types';

export const InputPasswordComponent: React.FC<InputPasswordProps> = ({
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      icon={{
        name: showPassword ? IconTypes.VISIBLE : IconTypes.NOT_VISIBLE,
        size: 20,
        onClick: () => setShowPassword(!showPassword),
      }}
    />
  );
};
