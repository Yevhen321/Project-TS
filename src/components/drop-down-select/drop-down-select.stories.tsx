import React from 'react';
import { DropDownOptions, DropDownSelect } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { options } from '../../data/drop-down-options';
import { PropsValue } from 'react-select';

export default {
  title: 'Components / DropDownSelect',
  component: DropDownSelect,
  argTypes: {},
} as ComponentMeta<typeof DropDownSelect>;

const Template: ComponentStory<typeof DropDownSelect> = (args) => {
  const [value, setValue] = React.useState<
    PropsValue<DropDownOptions> | undefined
  >();
  return (
    <DropDownSelect {...args} value={value} onChange={(val) => setValue(val)} />
  );
};

export const VariantDropDownSelect = Template.bind({});

VariantDropDownSelect.args = {
  options: options,
  isRtl: false,
  isDisabled: false,
  isMulti: true,
  closeMenuOnSelect: true,
};
