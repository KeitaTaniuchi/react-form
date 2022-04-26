import React from 'react';
import RadioButton from 'components/atoms/RadioButton';
import questionLabels from 'utils/questionLabels';
import RadioButtonType from 'types/radioButton';

type Props = {
  className?: string;
};

const Step2Q3: React.FC<Props> = ({ className }) => {
  const options: RadioButtonType = ['はい', 'いいえ'];

  return (
    <div className={className}>
      <p className='mb-2'>{questionLabels.step2.q3}</p>
      <RadioButton
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
