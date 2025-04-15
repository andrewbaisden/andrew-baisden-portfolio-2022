import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CSharpLogo } from './CSharpLogo';

export default {
	title: 'Logos/C# Logo',
	component: CSharpLogo,
} as ComponentMeta<typeof CSharpLogo>;

const Template: ComponentStory<typeof CSharpLogo> = (args) => <CSharpLogo {...args} />;

export const Primary = Template.bind({});
