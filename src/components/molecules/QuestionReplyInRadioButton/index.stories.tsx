import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import QuestionReplyInRadioButton from 'components/molecules/QuestionReplyInRadioButton/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'molecules/QuestionReplyInRadioButton',
  component: QuestionReplyInRadioButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof QuestionReplyInRadioButton>;

const Template: ComponentStory<typeof QuestionReplyInRadioButton> = (args) => <QuestionReplyInRadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'label',
  options: ['option1', 'option2'],
  name: 'name',
  onChange: () => {
    console.log('onChange');
  },
};
