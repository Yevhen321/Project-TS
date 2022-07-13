import React from 'react';
import { RadioGroup } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components / RadioGroup',
  component: RadioGroup,
  argTypes: {},
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const Radio = Template.bind({});

Radio.args = {
  label: 'Radio Button Label',
  options: [
    { text: 'Hello', value: 'Hello' },
    { text: 'Goodbye', value: 'Goodbye' },
  ],
};
