import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AboutProfileImage } from './AboutProfileImage';

export default {
	title: 'About/Profile Image',
	component: AboutProfileImage,
} as ComponentMeta<typeof AboutProfileImage>;

const Template: ComponentStory<typeof AboutProfileImage> = (args) => <AboutProfileImage {...args} />;

export const Primary = Template.bind({});
