import React from 'react';
import QuestionReplyInTextArea from 'components/molecules/QuestionReplyInTextArea/index';
import questionLabels from 'utils/questionLabels';

const Step3Q1: React.FC = () => {
  return <QuestionReplyInTextArea idAndFor={'step3-q1'} label={questionLabels.step3.q1} />;
};

export default Step3Q1;
