import React from 'react';
import Step2Q3Label from 'components/atoms/QuestionLabels/Step2Q3Label';
import RadioButton from 'components/atoms/Buttons/RadioButton';
import RadioButtonType from 'types/radioButton';

type Props = {
  className: string;
};

const Step2Q3: React.FC<Props> = ({ className }) => {
  const options: RadioButtonType = ['はい', 'いいえ'];

  return (
    <div className={className}>
      <Step2Q3Label className={'step2Q3Label'} />
      <RadioButton
        className={'step2Q3Radio'}
        options={options}
        name={'step2q3'}
        onChange={() => {
          console.log('Step2Q3');
        }}
      />
    </div>
  );
};

export default Step2Q3;
