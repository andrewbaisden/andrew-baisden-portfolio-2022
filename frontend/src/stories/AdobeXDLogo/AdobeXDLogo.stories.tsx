import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AdobeXDLogo } from './AdobeXDLogo';

export default {
	title: 'Logos/Adobe XD Logo',
	component: AdobeXDLogo,
} as ComponentMeta<typeof AdobeXDLogo>;

const Template: ComponentStory<typeof AdobeXDLogo> = (args) => <AdobeXDLogo {...args} />;

export const Primary = Template.bind({});
