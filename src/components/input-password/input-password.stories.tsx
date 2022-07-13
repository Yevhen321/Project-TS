import React, { useState } from 'react';
import { InputPassword } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components / InputPassword',
  component: InputPassword,
  argTypes: {
    width: {
      control: {
        type: 'radio',
      },
      options: ['full', 'content'],
    },
  },
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) => {
  const [value, setValue] = useState('');
  return <InputPassword {...args} value={value} onChange={setValue} />;
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  label: 'Enter password',
  width: 'full',
  showError: false,
  errorMessage: 'This is error message',
};
