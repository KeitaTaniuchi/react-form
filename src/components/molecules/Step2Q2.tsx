import React from 'react';
import RadioButton from 'components/atoms/Buttons/RadioButton';
import questionLabels from 'utils/questionLabels';
import RadioButtonType from 'types/radioButton';

type Props = {
  setQ2Checked: (q1Checked: boolean) => void;
};

const Step2Q2: React.FC<Props> = ({ setQ2Checked }) => {
  const options: RadioButtonType = ['はい', 'いいえ'];

  return (
    <>
      <p className='mb-2'>{questionLabels.step2.q2}</p>
      <RadioButton
        options={options}
        name={'step2q2'}
        onChange={() => {
          setQ2Checked(true);
        }}
      />
    </>
  );
};

export default Step2Q2;
