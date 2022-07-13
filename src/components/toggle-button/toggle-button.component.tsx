import React from 'react';
import classes from './toggle-button.module.scss';
import { ToggleButtonProps } from './toggle-button.types';

export const ToggleButtonComponent: React.FC<ToggleButtonProps> = ({
  toggled,
  onChange,
}) => {
  return (
    <input
      type="checkbox"
      className={classes.toggleWrapper}
      checked={toggled}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};
