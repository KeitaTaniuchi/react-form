import React from 'react';
import Step2Q2Label from 'components/atoms/QuestionLabels/Step2Q2Label';
import RadioButton from 'components/atoms/Buttons/RadioButton';
import RadioButtonType from 'types/radioButton';

type Props = {
  className: string;
};

const Step2Q2: React.FC<Props> = ({ className }) => {
  const options: RadioButtonType = ['はい', 'いいえ'];

  return (
    <div className={className}>
      <Step2Q2Label className={'step2Q2Label'} />
      <RadioButton
        className={'step2Q2Radio'}
        options={options}
        name={'step2q2'}
        onChange={() => {
          console.log('Step2Q2');
        }}
      />
    </div>
  );
};

export default Step2Q2;
