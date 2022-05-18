import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GoNextPageButton from 'components/molecules/GoNextPageButton/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'molecules/GoNextPageButton',
  component: GoNextPageButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof GoNextPageButton>;

const Template: ComponentStory<typeof GoNextPageButton> = (args) => <GoNextPageButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: 'path',
};
