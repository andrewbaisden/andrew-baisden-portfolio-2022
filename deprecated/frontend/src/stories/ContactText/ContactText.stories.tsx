import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContactText } from './ContactText';

export default {
	title: 'Contact/Contact Text',
	component: ContactText,
} as ComponentMeta<typeof ContactText>;

const Template: ComponentStory<typeof ContactText> = (args) => <ContactText {...args} />;

export const Primary = Template.bind({});
