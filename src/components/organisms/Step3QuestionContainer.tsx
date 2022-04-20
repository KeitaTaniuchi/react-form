import React from 'react';
import QuestionOuterBorder from 'components/molecules/QuestionOuterBorder';
import Step3Q1 from 'components/molecules/Step3Q1';

const Step3QuestionContainer = () => {
  return (
    <>
      <QuestionOuterBorder stepNumber={3} questionDetail={'ご相談内容を入力してください'}>
        <div className='mb-10'>
          <Step3Q1 />
        </div>
      </QuestionOuterBorder>
    </>
  );
};

export default Step3QuestionContainer;
