import React from 'react';
import Step1Q1Label from 'components/atoms/QuestionLabels/Step1Q1Label';
import RadioButton from 'components/atoms/Buttons/RadioButton';
import RadioButtonType from 'types/radioButton';

type Props = {
  className: string;
};

const Step1Q1: React.FC<Props> = ({ className }) => {
  const options: RadioButtonType = ['男性', '女性'];

  return (
    <div className={className}>
      <Step1Q1Label className={'step1Q1Label'} />
      <RadioButton
        className={'step1Q1Radio'}
        options={options}
        name={'step1q1'}
        onChange={() => {
          console.log('Step1Q1');
        }}
      />
    </div>
  );
};

export default Step1Q1;
