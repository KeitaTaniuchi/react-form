import React from 'react';
import RadioButton from 'components/atoms/Buttons/RadioButton';
import questionLabels from 'utils/questionLabels';
import RadioButtonType from 'types/radioButton';

type Props = {
  className?: string;
};

const Step1Q1: React.FC<Props> = ({ className }) => {
  const options: RadioButtonType = ['男性', '女性'];

  return (
    <div className={className}>
      <p className='mb-2'>{questionLabels.step1.q1}</p>
      <RadioButton
        className={''}
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
