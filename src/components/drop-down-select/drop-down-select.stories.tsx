import React from 'react';
import { DropDownSelect } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { options } from '../../data/drop-down-options';

export default {
  title: 'Components / DropDownSelect',
  component: DropDownSelect,
  argTypes: {},
} as ComponentMeta<typeof DropDownSelect>;

const Template: ComponentStory<typeof DropDownSelect> = (args) => {
  return <DropDownSelect {...args} />;
};

export const DropDownSelectStory = Template.bind({});

DropDownSelectStory.args = {
  options: options,
  isRtl: false,
  isDisabled: false,
  isMulti: true,
  closeMenuOnSelect: true,
};
