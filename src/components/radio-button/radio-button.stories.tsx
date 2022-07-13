import React from 'react';
import { RadioButton } from '.';
import '../../index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components / RadioButton',
  component: RadioButton,
  argTypes: {},
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Radio = Template.bind({});

Radio.args = {
  label: 'Radio Button Label',
  checked: false,
};
