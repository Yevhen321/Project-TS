import React from 'react';
import { Text } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components / Text',
  component: Text,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'no size'],
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextVariant = Template.bind({});

TextVariant.args = {
  variant: 'h1',
  text: 'This is my text',
  size: 'medium',
};
