import React from 'react';
import QuestionOuterBorder from 'components/molecules/QuestionOuterBorder';
import Step2Q1 from 'components/molecules/Step2Q1';
import Step2Q2 from 'components/molecules/Step2Q2';
import Step2Q3 from 'components/molecules/Step2Q3';

const Step1QuestionContainer = () => {
  return (
    <>
      <QuestionOuterBorder className='mx-auto w-10/12' stepNumber={2} questionDetail={'以下にお答えください'}>
        <Step2Q1 className='mb-10' />
        <Step2Q2 className='mb-10' />
        <Step2Q3 />
      </QuestionOuterBorder>
    </>
  );
};

export default Step1QuestionContainer;
