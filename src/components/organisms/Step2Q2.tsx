import React from 'react';
import QuestionReplyInRadioButton from 'components/molecules/QuestionReplyInRadioButton';
import questionLabels from 'utils/questionLabels';
import { yesOrNo } from 'utils/radioButtonOptions';

type Props = {
  setQ2Checked: (q2Checked: boolean) => void;
};

const Step2Q2: React.FC<Props> = ({ setQ2Checked }) => {
  return (
    <QuestionReplyInRadioButton
      label={questionLabels.step2.q2}
      options={yesOrNo}
      name={'step2-q2'}
      onChange={() => {
        setQ2Checked(true);
      }}
    />
  );
};

export default Step2Q2;
