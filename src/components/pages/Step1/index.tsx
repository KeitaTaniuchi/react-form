import React from 'react';
import QuestionOuterBorder from 'components/organisms/QuestionOuterBorder/index';
import Step1Q1 from 'components/organisms/Step1Q1/index';
import Step1Q2 from 'components/organisms/Step1Q2/index';
import GoNextPageButton from 'components/molecules/GoNextPageButton/index';

const Step1: React.FC = () => {
  return (
    <div className=' mx-auto mt-10 w-9/12'>
      <QuestionOuterBorder stepNumber={1} questionDetail={'お客様の情報を入力してください'}>
        <div className='mb-10'>
          <Step1Q1 />
        </div>
        {<Step1Q2 />}
      </QuestionOuterBorder>
      <div className=' mt-10 flex justify-center space-x-20'>
        <GoNextPageButton path={'/step2'} />
      </div>
    </div>
  );
};

export default Step1;
