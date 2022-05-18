import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButBackPrevPageButton from 'components/molecules/BackPrevPageButton/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'molecules/BackPrevPageButton',
  component: RadioButBackPrevPageButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof RadioButBackPrevPageButton>;

const Template: ComponentStory<typeof RadioButBackPrevPageButton> = (args) => <RadioButBackPrevPageButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: 'path',
};
