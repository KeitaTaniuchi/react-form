import React from 'react';
import Step3Q1Label from 'components/atoms/QuestionLabels/Step2Q3Label';
import TextArea from 'components/atoms/TextArea';

type Props = {
  className: string;
};

const Step3Q1: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Step3Q1Label className={'step3Q1Label'} />
      <TextArea className={'step3Q1TextArea'} />
    </div>
  );
};

export default Step3Q1;
