import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FooterText } from './FooterText';

export default {
	title: 'Footer/Footer Text',
	component: FooterText,
} as ComponentMeta<typeof FooterText>;

const Template: ComponentStory<typeof FooterText> = (args) => <FooterText {...args} />;

export const Primary = Template.bind({});
