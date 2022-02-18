import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NodeJSLogo } from './NodeJSLogo';

export default {
	title: 'Logos/NodeJS Logo',
	component: NodeJSLogo,
} as ComponentMeta<typeof NodeJSLogo>;

const Template: ComponentStory<typeof NodeJSLogo> = (args) => <NodeJSLogo {...args} />;

export const Primary = Template.bind({});
