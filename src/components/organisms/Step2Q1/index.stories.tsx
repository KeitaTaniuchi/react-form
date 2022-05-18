import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Step2Q1 from 'components/organisms/Step2Q1/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organisms/Step2Q1',
  component: Step2Q1,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Step2Q1>;

const Template: ComponentStory<typeof Step2Q1> = (args) => <Step2Q1 {...args} />;

export const Default = Template.bind({});
Default.args = {};
