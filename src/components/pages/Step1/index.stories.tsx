import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Step1 from 'components/pages/Step1/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'pages/Step1',
  component: Step1,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Step1>;

const Template: ComponentStory<typeof Step1> = (args) => <Step1 {...args} />;

export const Default = Template.bind({});
Default.args = {};
