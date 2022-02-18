import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AboutProfileText } from './AboutProfileText';

export default {
	title: 'About/Profile Text',
	component: AboutProfileText,
} as ComponentMeta<typeof AboutProfileText>;

const Template: ComponentStory<typeof AboutProfileText> = (args) => <AboutProfileText {...args} />;

export const Primary = Template.bind({});
