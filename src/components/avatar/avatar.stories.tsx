import React from 'react';
import { Avatar } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'large', 'medium'],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarStory = Template.bind({});

AvatarStory.args = {
  name: 'Denis',
  surname: 'Tymchenko',
  size: 'medium',
};
