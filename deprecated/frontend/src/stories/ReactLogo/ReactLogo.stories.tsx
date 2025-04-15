import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReactLogo } from './ReactLogo';

export default {
	title: 'Logos/React Logo',
	component: ReactLogo,
} as ComponentMeta<typeof ReactLogo>;

const Template: ComponentStory<typeof ReactLogo> = (args) => <ReactLogo {...args} />;

export const Primary = Template.bind({});
