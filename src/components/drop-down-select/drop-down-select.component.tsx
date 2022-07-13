import React from 'react';
import { DropDownSelectProps } from './drop-down-select.types';
import Select from 'react-select';

export const DropDownSelectComponent: React.FC<DropDownSelectProps> = ({
  options,
  value,
  onChange,
  isRtl = false,
  isDisabled,
  isMulti = true,
  closeMenuOnSelect = true,
}) => {
  // const [value, setValue] = useState<PropsValue<DropDownOptions> | undefined>(); useState without animatedComponents
  return (
    <div>
      <Select
        options={options}
        isMulti={isMulti}
        onChange={onChange}
        value={value}
        isRtl={isRtl}
        isDisabled={isDisabled}
        closeMenuOnSelect={closeMenuOnSelect}
      />
    </div>
  );
};
