import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SkillGroupIcons } from './SkillGroupIcons';

export default {
	title: 'Skills/Skill Group',
	component: SkillGroupIcons,
} as ComponentMeta<typeof SkillGroupIcons>;

const Template: ComponentStory<typeof SkillGroupIcons> = (args) => <SkillGroupIcons {...args} />;

export const Primary = Template.bind({});
