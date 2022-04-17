import React from 'react';
import Step2Q1Label from 'components/atoms/QuestionLabels/Step2Q1Label';
import RadioButton from 'components/atoms/Buttons/RadioButton';
import RadioButtonType from 'types/radioButton';

type Props = {
  className: string;
};

const Step2Q1: React.FC<Props> = ({ className }) => {
  const options: RadioButtonType = ['はい', 'いいえ'];

  return (
    <div className={className}>
      <Step2Q1Label className={'step2Q1Label'} />
      <RadioButton
        className={'step2Q1Radio'}
        options={options}
        name={'step2q1'}
        onChange={() => {
          console.log('Step2Q1');
        }}
      />
    </div>
  );
};

export default Step2Q1;
