import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from 'components/atoms/TextArea/index';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id',
};
