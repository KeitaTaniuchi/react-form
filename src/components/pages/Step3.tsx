import React from 'react';
import QuestionOuterBorder from 'components/organisms/QuestionOuterBorder';
import Step3Q1 from 'components/organisms/Step3Q1';
import GoNextPageButton from 'components/molecules/GoNextPageButton';
import BackPrevPageButton from 'components/molecules/BackPrevPageButton';

const Step3 = () => {
  return (
    <div className='mx-auto mt-10 w-9/12'>
      <QuestionOuterBorder stepNumber={3} questionDetail={'ご相談内容を入力してください'}>
        <Step3Q1 />
      </QuestionOuterBorder>
      <div className='mt-10 flex  justify-center space-x-20'>
        <BackPrevPageButton path={'/step2'} />
        <GoNextPageButton path={'/step1'} />
      </div>
    </div>
  );
};

export default Step3;
