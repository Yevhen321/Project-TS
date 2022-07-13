import React from 'react';
import { AuthBoxProps } from './auth-box.types';
import classes from './auth-box.module.scss';
import { LanguageSelect } from '../language-select';

export const AuthBoxComponent: React.FC<AuthBoxProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src="./assets/images/logo.png" alt="logo" />
      </div>
      {children}
      <LanguageSelect />
    </div>
  );
};
