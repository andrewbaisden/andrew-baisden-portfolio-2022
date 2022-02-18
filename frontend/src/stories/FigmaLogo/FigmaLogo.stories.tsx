import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FigmaLogo } from './FigmaLogo';

export default {
	title: 'Logos/Figma Logo',
	component: FigmaLogo,
} as ComponentMeta<typeof FigmaLogo>;

const Template: ComponentStory<typeof FigmaLogo> = (args) => <FigmaLogo {...args} />;

export const Primary = Template.bind({});
