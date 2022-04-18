import React from 'react';
import QuestionOuterBorder from 'components/molecules/QuestionOuterBorder';
import Step1Q1 from 'components/molecules/Step1Q1';
import Step1Q2 from 'components/molecules/Step1Q2';

const Step1QuestionContainer = () => {
  return (
    <>
      <QuestionOuterBorder stepNumber={1} questionDetail={'お客様の情報を入力してください'}>
        <Step1Q1 className='mb-10' />
        <Step1Q2 className='' />
      </QuestionOuterBorder>
    </>
  );
};

export default Step1QuestionContainer;
