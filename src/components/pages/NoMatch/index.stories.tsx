import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NoMatch from 'components/pages/NoMatch/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'pages/NoMatch',
  component: NoMatch,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof NoMatch>;

const Template: ComponentStory<typeof NoMatch> = (args) => <NoMatch {...args} />;

export const Default = Template.bind({});
Default.args = {};
