import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Step3 from 'components/pages/Step3/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'pages/Step3',
  component: Step3,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Step3>;

const Template: ComponentStory<typeof Step3> = (args) => <Step3 {...args} />;

export const Default = Template.bind({});
Default.args = {};
