import React from 'react';
import QuestionOuterBorder from 'components/molecules/QuestionOuterBorder';
import Step1Q1 from 'components/molecules/Step1Q1';
import Step1Q2 from 'components/molecules/Step1Q2';

const Step1 = () => {
  return (
    <>
      <QuestionOuterBorder className='step2Q1'>
        <Step1Q1 className='step1Q1' />
        <Step1Q2 className='step1Q2' />
      </QuestionOuterBorder>
    </>
  );
};

export default Step1;
