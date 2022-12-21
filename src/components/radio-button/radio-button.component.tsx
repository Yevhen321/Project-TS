import React from 'react';
import clsx from 'clsx';
import classes from './radio-button.module.scss';
import { RadioButtonProps } from './radio-button.types';
import { Text } from '../text';

export const RadioButtonComponent: React.FC<RadioButtonProps> = ({
  name,
  id,
  onChange,
  value,
  checked,
  label,
}) => {
  return (
    <div
      className={clsx(
        classes.radioWrapper,
        checked ? classes.activeRadio : classes.radioWrapper
      )}
    >
      <div
        className={classes.radioButton}
        onClick={() => onChange(checked, value, label)}
      >
        <div
          className={clsx(classes.circle, checked ? '' : classes.radioClicked)}
        ></div>
      </div>
      {label && <Text variant='h6' text={label} />}
      <input
        type='radio'
        className={classes.radioInput}
        id={id}
        onChange={() => onChange(checked, value, label)}
        checked={checked}
        name={name}
        value={value}
      />
    </div>
  );
};
