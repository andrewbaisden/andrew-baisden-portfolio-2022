import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { JavaScriptLogo } from './JavaScriptLogo';

export default {
	title: 'Logos/JavaScript Logo',
	component: JavaScriptLogo,
} as ComponentMeta<typeof JavaScriptLogo>;

const Template: ComponentStory<typeof JavaScriptLogo> = (args) => <JavaScriptLogo {...args} />;

export const Primary = Template.bind({});
