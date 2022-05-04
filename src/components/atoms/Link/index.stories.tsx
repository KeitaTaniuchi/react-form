import React from 'react';
import { ComponentStory } from '@storybook/react';

import Link from 'components/atoms/Link/index';

export default {
  component: Link,
  title: 'Link',
};

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {};
