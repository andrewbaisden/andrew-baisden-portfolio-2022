import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PhotoshopLogo } from './PhotoshopLogo';

export default {
	title: 'Logos/Photoshop Logo',
	component: PhotoshopLogo,
} as ComponentMeta<typeof PhotoshopLogo>;

const Template: ComponentStory<typeof PhotoshopLogo> = (args) => <PhotoshopLogo {...args} />;

export const Primary = Template.bind({});
