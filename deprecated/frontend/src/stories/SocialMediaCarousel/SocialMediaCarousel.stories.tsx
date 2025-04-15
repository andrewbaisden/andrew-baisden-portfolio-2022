import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SocialMediaCarousel } from './SocialMediaCarousel';

export default {
	title: 'Carousel/Social Media Carousel',
	component: SocialMediaCarousel,
} as ComponentMeta<typeof SocialMediaCarousel>;

const Template: ComponentStory<typeof SocialMediaCarousel> = (args) => <SocialMediaCarousel {...args} />;

export const Primary = Template.bind({});
