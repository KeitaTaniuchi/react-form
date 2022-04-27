import React from 'react';
import QuestionReplyInRadioButton from 'components/molecules/QuestionReplyInRadioButton';
import questionLabels from 'utils/questionLabels';
import { menOrWomen } from 'utils/radioButtonOptions';

const Step1Q1: React.FC = () => {
  return (
    <QuestionReplyInRadioButton
      label={questionLabels.step1.q1}
      options={menOrWomen}
      name={'step1-q1'}
      onChange={() => {
        console.log('Step1Q1');
      }}
    />
  );
};

export default Step1Q1;
