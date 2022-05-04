import React from 'react';
import { ComponentStory } from '@storybook/react';

import Button from 'components/atoms/Button/index';

export default {
  component: Button,
  title: 'Button',
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const BackPrevPageButton = Template.bind({});
BackPrevPageButton.args = {
  onClick: () => {
    console.log('前に戻る');
  },
  label: '前に戻る　＞',
};

export const GoNextPageButton = Template.bind({});
GoNextPageButton.args = {
  onClick: () => {
    console.log('次に進む');
  },
  label: '次に進む　＞',
};
