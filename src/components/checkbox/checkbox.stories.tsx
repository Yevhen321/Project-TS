import React from 'react';
import { Checkbox } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components / Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const CheckboxVariant = Template.bind({});

CheckboxVariant.args = {
  value: 'Checkbox Caption Text',
};
