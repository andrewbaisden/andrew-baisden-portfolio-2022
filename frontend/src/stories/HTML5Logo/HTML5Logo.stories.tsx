import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HTML5Logo } from './HTML5Logo';

export default {
	title: 'Logos/HTML5 Logo',
	component: HTML5Logo,
} as ComponentMeta<typeof HTML5Logo>;

const Template: ComponentStory<typeof HTML5Logo> = (args) => <HTML5Logo {...args} />;

export const Primary = Template.bind({});
