import React, { useContext } from 'react';
import context from 'App';
import RadioButton from 'components/atoms/Buttons/RadioButton';
import questionLabels from 'utils/questionLabels';
import RadioButtonType from 'types/radioButton';

/* const { step1Q1Answer, setStep1Q1Answer } = useContext(context); */

const Step1Q1: React.FC = () => {
  const options: RadioButtonType = ['男性', '女性'];

  return (
    <>
      <p className='mb-2'>{questionLabels.step1.q1}</p>
      <RadioButton
        options={options}
        name={'step1q1'}
        onChange={() => {
          console.log('Step1Q1');
        }}
      />
    </>
  );
};

export default Step1Q1;
