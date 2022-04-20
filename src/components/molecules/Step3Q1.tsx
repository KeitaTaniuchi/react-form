import React from 'react';
import questionLabels from 'utils/questionLabels';
import TextArea from 'components/atoms/TextArea';

const Step3Q1: React.FC = () => {
  const idAndFor: string = 'step3-q1';

  return (
    <>
      <label htmlFor={idAndFor} className='block mb-2'>
        {questionLabels.step3.q1}
      </label>
      <TextArea id={idAndFor} />
    </>
  );
};

export default Step3Q1;
