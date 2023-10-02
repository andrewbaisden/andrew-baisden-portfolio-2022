import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SQLLogo } from './SQLLogo';

export default {
  title: 'Logos/CSS3 Logo',
  component: SQLLogo,
} as ComponentMeta<typeof SQLLogo>;

const Template: ComponentStory<typeof SQLLogo> = (args) => (
  <SQLLogo {...args} />
);

export const Primary = Template.bind({});
