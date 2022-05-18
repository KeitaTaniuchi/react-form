import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Step3Q1 from 'components/organisms/Step3Q1/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organisms/Step3Q1',
  component: Step3Q1,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Step3Q1>;

const Template: ComponentStory<typeof Step3Q1> = (args) => <Step3Q1 {...args} />;

export const Default = Template.bind({});
Default.args = {};
