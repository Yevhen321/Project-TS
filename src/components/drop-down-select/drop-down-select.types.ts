import { ActionMeta, MultiValue, PropsValue, SingleValue } from 'react-select';

export type DropDownOptions = {
  value: string;
  label: string;
};

export interface DropDownSelectProps {
  options: DropDownOptions[];
  onChange: (
    newValue: SingleValue<DropDownOptions> | MultiValue<DropDownOptions>,
    actionMeta: ActionMeta<DropDownOptions>
  ) => void;
  value: PropsValue<DropDownOptions> | undefined;
  isRtl?: boolean;
  isDisabled?: boolean;
  isMulti?: boolean;
  closeMenuOnSelect?: boolean;
}

// onChange: (
//     newValue:
//       | SingleValue<DropDownOptions>
//       | MultiValue<DropDownOptions>
//       | unknown,
//     actionMeta: ActionMeta<DropDownOptions> | ActionMeta<unknown>
//   ) => void; with animatedComponents
