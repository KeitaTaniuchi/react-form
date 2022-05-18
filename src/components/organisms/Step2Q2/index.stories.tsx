import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Step2Q2 from 'components/organisms/Step2Q2/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organisms/Step2Q2',
  component: Step2Q2,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Step2Q2>;

const Template: ComponentStory<typeof Step2Q2> = (args) => <Step2Q2 {...args} />;

export const Default = Template.bind({});
Default.args = {};
