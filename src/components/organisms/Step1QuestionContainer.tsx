import React from 'react';
import QuestionOuterBorder from 'components/organisms/QuestionOuterBorder';
import Step1Q1 from 'components/molecules/Step1Q1';
import Step1Q2 from 'components/molecules/Step1Q2';

const Step1QuestionContainer = () => {
  return (
    <>
      <QuestionOuterBorder stepNumber={1} questionDetail={'お客様の情報を入力してください'}>
        <div className='mb-10'>
          <Step1Q1 />
        </div>
        <Step1Q2 />
      </QuestionOuterBorder>
    </>
  );
};

export default Step1QuestionContainer;
