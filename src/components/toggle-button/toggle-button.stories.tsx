import React, { useState } from 'react';
import { ToggleButton } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components / ToggleButton',
  component: ToggleButton,
  argTypes: {},
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return <ToggleButton {...args} onChange={() => setToggle(!toggle)} />;
};

export const Primary = Template.bind({});

Primary.args = {
  toggled: true,
};
