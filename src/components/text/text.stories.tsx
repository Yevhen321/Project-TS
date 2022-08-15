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

export const TextStory = Template.bind({});

TextStory.args = {
  variant: 'h1',
  text: 'Storybook',
  size: 'medium',
};
