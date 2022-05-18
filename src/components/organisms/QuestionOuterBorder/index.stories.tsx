import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import QuestionOuterBorder from 'components/organisms/QuestionOuterBorder/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'organisms/QuestionOuterBorder',
  component: QuestionOuterBorder,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof QuestionOuterBorder>;

const Template: ComponentStory<typeof QuestionOuterBorder> = (args) => <QuestionOuterBorder {...args} />;

export const Default = Template.bind({});
Default.args = {
  questionDetail: 'questionDetail',
  stepNumber: 0,
  /* childrenは未定義 */
};
