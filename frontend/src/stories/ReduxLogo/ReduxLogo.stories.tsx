import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReduxLogo } from './ReduxLogo';

export default {
	title: 'Logos/Redux Logo',
	component: ReduxLogo,
} as ComponentMeta<typeof ReduxLogo>;

const Template: ComponentStory<typeof ReduxLogo> = (args) => <ReduxLogo {...args} />;

export const Primary = Template.bind({});
