import React from 'react';
import { SystemAlert } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components / SystemAlert',
  component: SystemAlert,
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['error', 'warning', 'success', 'info'],
    },
    width: {
      control: {
        type: 'radio',
      },
      options: ['full', 'content'],
    },
  },
} as ComponentMeta<typeof SystemAlert>;

const Template: ComponentStory<typeof SystemAlert> = (args) => (
  <SystemAlert {...args} />
);

export const SystemAlertStory = Template.bind({});

SystemAlertStory.args = {
  type: 'success',
};
