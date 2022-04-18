import React from 'react';
import QuestionOuterBorder from 'components/molecules/QuestionOuterBorder';
import Step3Q1 from 'components/molecules/Step3Q1';

const Step1QuestionContainer = () => {
  return (
    <>
      <QuestionOuterBorder stepNumber={3} questionDetail={'ご相談内容を入力してください'}>
        <Step3Q1 className='mb-10' />
      </QuestionOuterBorder>
    </>
  );
};

export default Step1QuestionContainer;
