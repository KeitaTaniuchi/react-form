import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropDownList from 'components/atoms/DropDownList/index';

export default {
  title: 'Atoms/DropDownList',
  component: DropDownList,
} as ComponentMeta<typeof DropDownList>;

const Template: ComponentStory<typeof DropDownList> = (args) => <DropDownList {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeHolder: 'placeHolder',
  options: [
    { value: 0, label: 'option0' },
    { value: 1, label: 'option1' },
    { value: 2, label: 'option2' },
  ],
  name: 'name',
  /* setDropDownValueは未定義 */
};
