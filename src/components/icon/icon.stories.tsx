import React from 'react';
import { Icon } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconTypes } from '../../data/icons';

export default {
  title: 'Components / Icon',
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const VariantIcon = Template.bind({});

VariantIcon.args = {
  name: IconTypes.MENU,
  size: 20,
};
