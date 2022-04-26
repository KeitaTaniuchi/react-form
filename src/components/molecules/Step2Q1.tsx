import React from 'react';
import RadioButton from 'components/atoms/RadioButton';
import questionLabels from 'utils/questionLabels';
import RadioButtonType from 'types/radioButton';

type Props = {
  setQ1Checked: (q1Checked: boolean) => void;
};

const Step2Q1: React.FC<Props> = ({ setQ1Checked }) => {
  const options: RadioButtonType = ['はい', 'いいえ'];

  return (
    <>
      <p className='mb-2'>{questionLabels.step2.q1}</p>
      <RadioButton
        options={options}
        name={'step2q1'}
        onChange={() => {
          setQ1Checked(true);
        }}
      />
    </>
  );
};

export default Step2Q1;
