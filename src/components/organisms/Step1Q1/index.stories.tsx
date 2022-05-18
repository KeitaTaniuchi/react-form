import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Step1Q1 from 'components/organisms/Step1Q1/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organisms/Step1Q1',
  component: Step1Q1,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Step1Q1>;

const Template: ComponentStory<typeof Step1Q1> = (args) => <Step1Q1 {...args} />;

export const Default = Template.bind({});
Default.args = {};
