import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MongoDBLogo } from './MongoDBLogo';

export default {
	title: 'Logos/MongoDB Logo',
	component: MongoDBLogo,
} as ComponentMeta<typeof MongoDBLogo>;

const Template: ComponentStory<typeof MongoDBLogo> = (args) => <MongoDBLogo {...args} />;

export const Primary = Template.bind({});
