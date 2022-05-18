import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import QuestionReplyInTextArea from 'components/molecules/QuestionReplyInTextArea/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'molecules/QuestionReplyInTextArea',
  component: QuestionReplyInTextArea,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof QuestionReplyInTextArea>;

const Template: ComponentStory<typeof QuestionReplyInTextArea> = (args) => <QuestionReplyInTextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  idAndFor: 'idAndFor',
  label: 'label',
};
