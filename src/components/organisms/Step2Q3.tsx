import React from 'react';
import QuestionReplyInRadioButton from 'components/molecules/QuestionReplyInRadioButton/index';
import questionLabels from 'utils/questionLabels';
import { yesOrNo } from 'utils/radioButtonOptions';

const Step2Q3: React.FC = () => {
  return (
    <QuestionReplyInRadioButton
      label={questionLabels.step2.q3}
      options={yesOrNo}
      name={'step2-q3'}
      onChange={() => {
        console.log('Step2Q3');
      }}
    />
  );
};

export default Step2Q3;
