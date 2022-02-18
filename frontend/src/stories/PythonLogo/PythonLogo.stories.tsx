import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PythonLogo } from './PythonLogo';

export default {
	title: 'Logos/Python Logo',
	component: PythonLogo,
} as ComponentMeta<typeof PythonLogo>;

const Template: ComponentStory<typeof PythonLogo> = (args) => <PythonLogo {...args} />;

export const Primary = Template.bind({});
