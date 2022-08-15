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

export const CheckboxStory = Template.bind({});

CheckboxStory.args = {
  value: 'Checkbox story Text',
};
