import React from 'react';
import { Button } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconTypes } from '../../data/icons';

export default {
  title: 'Components / Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary', 'outlined'],
    },
    width: {
      control: {
        type: 'radio',
      },
      options: ['full', 'content'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const VariantButton = Template.bind({});

VariantButton.args = {
  variant: 'primary',
  text: 'My Button',
  size: 'large',
  disabled: false,
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  variant: 'outlined',
  text: 'With icon Button',
  size: 'large',
  disabled: false,
  icon: { name: IconTypes.NOTE },
};
