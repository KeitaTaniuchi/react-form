import React from 'react';
import { useNavigate } from 'react-router-dom';
import Step1QuestionContainer from 'components/organisms/Step1QuestionContainer';
import GoNextPageButton from 'components/atoms/Buttons/GoNextPageButton';

const Step1 = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-10 mx-auto w-9/12'>
      <Step1QuestionContainer />
      <div className='mt-10 flex  space-x-20 justify-center'>
        <GoNextPageButton
          onClick={() => {
            navigate('/step2');
          }}
        />
      </div>
    </div>
  );
};

export default Step1;
