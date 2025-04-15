import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TypeScriptLogo } from './TypeScriptLogo';

export default {
	title: 'Logos/TypeScript Logo',
	component: TypeScriptLogo,
} as ComponentMeta<typeof TypeScriptLogo>;

const Template: ComponentStory<typeof TypeScriptLogo> = (args) => <TypeScriptLogo {...args} />;

export const Primary = Template.bind({});
