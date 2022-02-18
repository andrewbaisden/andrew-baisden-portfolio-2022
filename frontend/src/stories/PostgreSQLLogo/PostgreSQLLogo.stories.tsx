import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PostgreSQLLogo } from './PostgreSQLLogo';

export default {
	title: 'Logos/CSS3 Logo',
	component: PostgreSQLLogo,
} as ComponentMeta<typeof PostgreSQLLogo>;

const Template: ComponentStory<typeof PostgreSQLLogo> = (args) => <PostgreSQLLogo {...args} />;

export const Primary = Template.bind({});
