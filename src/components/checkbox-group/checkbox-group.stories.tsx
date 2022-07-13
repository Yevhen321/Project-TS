import React from 'react';
import { CheckboxGroup } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components / CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {},
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args} />
);

export const CheckboxGroupVariant = Template.bind({});

CheckboxGroupVariant.args = {
  value: 'Checkbox Caption Text',
  options: [
    { text: 'Hello', value: 'Hello' },
    { text: 'Goodbye', value: 'Goodbye' },
  ],
};
