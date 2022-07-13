import React, { useState } from 'react';
import { Input } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components / Input',
  component: Input,
  argTypes: {
    width: {
      control: {
        type: 'radio',
      },
      options: ['full', 'content'],
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});

TextInput.args = {
  type: 'text',
  label: 'Enter text',
  width: 'content',
  value: 'text',
  showError: false,
  errorMessage: 'This is error message',
};
