import React from 'react';
import { CheckboxProps } from './checkbox.types';
import classes from './checkbox.module.scss';
import { Text } from '../text';

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  checked,
  id,
  name,
  label,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className={classes.checkboxWrapper}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={id}
        checked={checked}
        className={classes.checkbox}
        onChange={(e) => onChange && onChange(value, e.target.checked)}
        disabled={disabled}
      />
      {value && <Text text={value} variant="h6" color="gray" />}
    </div>
  );
};
