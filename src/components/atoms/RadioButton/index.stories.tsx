import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from 'components/atoms/RadioButton/index';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['option1', 'option2'],
  name: 'name',
  onChange: () => {
    console.log('onChange');
  },
};
