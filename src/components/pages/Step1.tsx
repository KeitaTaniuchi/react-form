import React from 'react';
import { useNavigate } from 'react-router-dom';
import Step1QuestionContainer from 'components/organisms/Step1QuestionContainer';
import Button from 'components/atoms/Button';

const Step1 = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-10 mx-auto w-9/12'>
      <Step1QuestionContainer />
      <div className='mt-10 flex  space-x-20 justify-center'>
        <Button
          onClick={() => {
            navigate('/step2');
          }}
          label={'次に進む　＞'}
        />
      </div>
    </div>
  );
};

export default Step1;
