import React from 'react';
import RadioButton from 'components/atoms/Buttons/RadioButton';
import questionLabels from 'utils/questionLabels';
import RadioButtonType from 'types/radioButton';

type Props = {
  className?: string;
};

const Step2Q2: React.FC<Props> = ({ className }) => {
  const options: RadioButtonType = ['はい', 'いいえ'];

  return (
    <div className={className}>
      <p className='mb-2'>{questionLabels.step2.q2}</p>
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
