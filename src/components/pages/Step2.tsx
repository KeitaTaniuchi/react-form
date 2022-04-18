import React from 'react';
import { useNavigate } from 'react-router-dom';
import Step2QuestionContainer from 'components/organisms/Step2QuestionContainer';
import BackPrevPageButton from 'components/atoms/Buttons/BackPrevPageButton';
import GoNextPageButton from 'components/atoms/Buttons/GoNextPageButton';

const Step1 = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-10 mx-auto w-9/12'>
      <Step2QuestionContainer />
      <div className='mt-10 flex  space-x-20 justify-center'>
        <BackPrevPageButton
          onClick={() => {
            navigate('/step1');
          }}
        />
        <GoNextPageButton
          onClick={() => {
            navigate('/step3');
          }}
        />
      </div>
    </div>
  );
};

export default Step1;
