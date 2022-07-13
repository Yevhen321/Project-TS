import React, { useState, useRef, Ref } from 'react';
import { debounce } from 'lodash';
import classes from './autocomplete.module.scss';
import { AutocompleteProps, Option } from './autocomplete.types';
import { IconTypes } from '../../data/icons';
import { Input } from '../input';
import { Text } from '../text';
import clsx from 'clsx';

export const AutocompleteComponent: React.FC<AutocompleteProps> = ({
  value,
  options = [],
  onChange,
  width,
  errorMessage,
  showError,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [isShown, setIsShown] = useState<boolean>(false);
  const completeRef = useRef();

  const filter = (val: string, opt: Option[]) => {
    const filtered = opt?.filter((o) => {
      if (o.value.toLowerCase().includes(val)) {
        return true;
      }
      return false;
    });
    setFilteredOptions(filtered || []);
  };

  const debounceFilter = debounce(
    (currentValue, currentOptions) => filter(currentValue, currentOptions),
    2000
  );

  const debounceOnchange = (e: string) => {
    onChange && onChange(e);
    e === '' ? setFilteredOptions([]) : debounceFilter(e, options);
  };

  return (
    <>
      <Input
        onChange={debounceOnchange}
        value={value}
        type="text"
        icon={{
          name:
            filteredOptions.length > 0
              ? IconTypes.ARROW_DOWN
              : IconTypes.ARROW_UP,
          size: 24,
          onClick: () => () => console.log('das'),
        }}
        width={width}
        onFocus={() => setIsShown(true)}
        ref={completeRef as unknown as Ref<HTMLInputElement> | undefined}
        // onBlur={() => setFocused(false)}
        errorMessage={errorMessage}
        showError={showError}
      />

      {showError
        ? ''
        : isShown &&
          filteredOptions.length > 0 && (
            <div
              className={clsx(
                classes.menu,
                width === 'full' ? classes.fullWidth : ''
              )}
            >
              {filteredOptions &&
                filteredOptions.map((o) => {
                  return (
                    <Text
                      key={o.value}
                      text={o.text}
                      variant="h6"
                      onClick={() => {
                        onChange && onChange(o.value);
                        // @ts-ignore
                        completeRef?.current?.focus();
                        setIsShown(false);
                      }}
                    />
                  );
                })}
            </div>
          )}
    </>
  );
};
