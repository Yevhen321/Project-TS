import React, { useState } from 'react';
import { Checkbox } from '../checkbox';
import { CheckboxGroupProps } from './checkbox-group.types';

export const CheckboxGroupComponent: React.FC<CheckboxGroupProps> = ({
  options,
  value,
  label,
  checked,
  disabled,
  onChange,
}) => {
  const [localValue, setLocalValue] = useState(value);

  const has = (v: string | number) => localValue.split(',').includes(String(v));

  const handleOnchageChecboxItem = (value: string, checked: boolean) => {
    let v = '';
    if (checked) {
      v = localValue.split(',').concat(String(value)).join(',');
    } else {
      v = localValue
        .split(',')
        .filter((p) => p !== String(value))
        .join(',');
    }
    setLocalValue(v);
    onChange(v);
  };

  return (
    <div>
      {options?.map((o) => (
        <Checkbox
          key={o.text}
          value={o.value}
          name={o.text}
          id={o.text}
          disabled={disabled}
          label={o.text}
          onChange={handleOnchageChecboxItem}
          checked={has(o.value)}
        />
      ))}
    </div>
  );
};
