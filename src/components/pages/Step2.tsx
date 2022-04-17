import React from 'react';
import Step2Q1 from 'components/molecules/Step2Q1';
import Step2Q2 from 'components/molecules/Step2Q2';
import Step2Q3 from 'components/molecules/Step2Q3';

const Step1 = () => {
  return (
    <>
      <Step2Q1 className='step2Q1' />
      <Step2Q2 className='step2Q2' />
      <Step2Q3 className='step2Q3' />
    </>
  );
};

export default Step1;
