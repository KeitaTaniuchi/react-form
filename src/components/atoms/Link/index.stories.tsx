import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from 'components/atoms/Link/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Atoms/Link',
  component: Link,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: 'to',
  label: 'label',
};
