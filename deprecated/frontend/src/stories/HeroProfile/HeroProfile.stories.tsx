import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeroProfile } from './HeroProfile';

export default {
	title: 'Header/HeroProfile',
	component: HeroProfile,
} as ComponentMeta<typeof HeroProfile>;

const Template: ComponentStory<typeof HeroProfile> = (args) => <HeroProfile {...args} />;

export const Primary = Template.bind({});
