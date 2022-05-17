import React from 'react';
import QuestionReplyInRadioButton from 'components/molecules/QuestionReplyInRadioButton/index';
import questionLabels from 'utils/questionLabels';
import { yesOrNo } from 'utils/radioButtonOptions';

type Props = {
  setQ1Checked: (q1Checked: boolean) => void;
};

const Step2Q1: React.FC<Props> = ({ setQ1Checked }) => {
  return (
    <QuestionReplyInRadioButton
      label={questionLabels.step2.q1}
      options={yesOrNo}
      name={'step2-q1'}
      onChange={() => {
        setQ1Checked(true);
      }}
    />
  );
};

export default Step2Q1;
