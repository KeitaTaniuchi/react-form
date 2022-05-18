import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Step2Q3 from 'components/organisms/Step2Q3/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organisms/Step2Q3',
  component: Step2Q3,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Step2Q3>;

const Template: ComponentStory<typeof Step2Q3> = (args) => <Step2Q3 {...args} />;

export const Default = Template.bind({});
Default.args = {};
