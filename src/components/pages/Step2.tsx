import React from 'react';
import { useNavigate } from 'react-router-dom';
import Step2QuestionContainer from 'components/organisms/Step2QuestionContainer';
import Button from 'components/atoms/Button';

const Step2 = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-10 mx-auto w-9/12'>
      <Step2QuestionContainer />
      <div className='mt-10 flex  space-x-20 justify-center'>
        <Button
          onClick={() => {
            navigate('/step1');
          }}
          label={'前に戻る　＞'}
        />
        <Button
          onClick={() => {
            navigate('/step3');
          }}
          label={'次に進む　＞'}
        />
      </div>
    </div>
  );
};

export default Step2;
