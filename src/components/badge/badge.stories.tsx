import React from 'react';
import { Badge } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: [
        'new',
        'completed',
        'popular',
        'active',
        'recommended',
        'pending',
        'deactivated',
        'not-available',
        'opposite',
      ],
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const VariantBadge = Template.bind({});

VariantBadge.args = {
  text: 'Badge Text',
  type: 'new',
};
