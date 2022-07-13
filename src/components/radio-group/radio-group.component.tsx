import React, { useState, useEffect } from 'react';
import { RadioButton } from '../radio-button';
import { RadioGroupProps } from './radio-group.types';

export const RadioGroupComponent: React.FC<RadioGroupProps> = ({
  onChange,
  value,
  label,
  options,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleRadioChange = (checked: boolean, v: string, text?: string) => {
    if (v !== value) {
      setSelectedValue(v);
      onChange && onChange(v, text);
    }
  };
  return (
    <div>
      {options?.map((o) => (
        <RadioButton
          key={o.value}
          name={o.text}
          value={o.value}
          label={o.text}
          onChange={handleRadioChange}
          checked={selectedValue === o.value}
        />
      ))}
    </div>
  );
};
