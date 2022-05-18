import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Step2 from 'components/pages/Step2/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'pages/Step2',
  component: Step2,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Step2>;

const Template: ComponentStory<typeof Step2> = (args) => <Step2 {...args} />;

export const Default = Template.bind({});
Default.args = {};
