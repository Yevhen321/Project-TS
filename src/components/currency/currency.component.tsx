import React, { forwardRef } from 'react';
import { CurrencyProps } from './currency.types';
import NumberFormat from 'react-number-format';
import { Input, InputProps } from '../input';
import { IconTypes } from '../../data/icons';

export type InputWrapperProps = Omit<InputProps, 'onChange'> & {
  onChange?: (event: any) => void;
};

export const InputWrapper = forwardRef<HTMLInputElement, InputWrapperProps>(
  ({ onChange, ...props }, ref) => {
    const inputOnChange = (v: string, event: any) => {
      onChange && onChange(event);
    };

    return <Input ref={ref} {...props} onChange={inputOnChange} />;
  }
);

export const CurrencyComponent: React.FC<CurrencyProps> = ({
  leftLabel,
  width,
  currency,
  value,
  onChange,
  allowNegative = false,
  decimalSeparator = '.',
  thousandsGroupStyle = 'thousand',
  thousandSeparator = ' ',
}) => {
  return (
    <NumberFormat
      customInput={InputWrapper}
      leftLabel={leftLabel}
      width={width}
      icon={{ name: currency as IconTypes, size: 14 }}
      onChange={(e) => onChange && onChange(e.target.value, e)}
      thousandsGroupStyle={thousandsGroupStyle}
      thousandSeparator={thousandSeparator}
      isNumericString={true}
      value={value}
      decimalSeparator={decimalSeparator}
      decimalScale={2}
      displayType="input"
      type="text"
      allowNegative={allowNegative}
    />
  );
};

InputWrapper.displayName = 'InputWrapper';
