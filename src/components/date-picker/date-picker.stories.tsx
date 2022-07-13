import React from 'react';
import { DatePicker } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components / Date-picker',
  component: DatePicker,
  argTypes: {},
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const VariantDatePicker = Template.bind({});

VariantDatePicker.args = {
  closeOnScroll: true,
  onlyCalendar: false,
  shouldCloseOnSelect: true,
  disabled: false,
};
