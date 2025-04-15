import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CSS3Logo } from './CSS3Logo';

export default {
	title: 'Logos/CSS3 Logo',
	component: CSS3Logo,
} as ComponentMeta<typeof CSS3Logo>;

const Template: ComponentStory<typeof CSS3Logo> = (args) => <CSS3Logo {...args} />;

export const Primary = Template.bind({});
