import React from 'react';
import RadioButton from 'components/atoms/Buttons/RadioButton';
import questionLabels from 'utils/questionLabels';
import RadioButtonType from 'types/radioButton';

type Props = {
  className?: string;
};

const Step2Q1: React.FC<Props> = ({ className }) => {
  const options: RadioButtonType = ['はい', 'いいえ'];

  return (
    <div className={className}>
      <p className='mb-2'>{questionLabels.step2.q1}</p>
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
