import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Step1Q2 from 'components/organisms/Step1Q2/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organisms/Step1Q2',
  component: Step1Q2,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Step1Q2>;

const Template: ComponentStory<typeof Step1Q2> = (args) => <Step1Q2 {...args} />;

export const Default = Template.bind({});
Default.args = {};
