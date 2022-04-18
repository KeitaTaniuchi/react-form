import React from 'react';
import { useNavigate } from 'react-router-dom';
import Step3QuestionContainer from 'components/organisms/Step3QuestionContainer';
import BackPrevPageButton from 'components/atoms/Buttons/BackPrevPageButton';
import GoNextPageButton from 'components/atoms/Buttons/GoNextPageButton';

const Step3 = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-10 mx-auto w-9/12'>
      <Step3QuestionContainer />
      <div className='mt-10 flex  space-x-20 justify-center'>
        <BackPrevPageButton
          onClick={() => {
            navigate('/step2');
          }}
        />
        <GoNextPageButton
          onClick={() => {
            navigate('/step1');
          }}
        />
      </div>
    </div>
  );
};

export default Step3;
