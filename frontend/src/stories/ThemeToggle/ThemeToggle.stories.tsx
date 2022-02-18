import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeToggle } from './ThemeToggle';

export default {
	title: 'Header/Theme Toggle',
	component: ThemeToggle,
} as ComponentMeta<typeof ThemeToggle>;

const Template: ComponentStory<typeof ThemeToggle> = (args) => <ThemeToggle {...args} />;

export const Primary = Template.bind({});
