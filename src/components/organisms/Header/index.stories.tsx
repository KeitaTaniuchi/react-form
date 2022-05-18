import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from 'components/organisms/Header/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organisms/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
