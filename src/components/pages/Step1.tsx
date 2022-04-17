import React from 'react';
import Step1Q1 from 'components/molecules/Step1Q1';
import Step1Q2 from 'components/molecules/Step1Q2';

const Step1 = () => {
  return (
    <>
      <Step1Q1 className='step1Q1' />
      <Step1Q2 className='step1Q2' />
    </>
  );
};

export default Step1;
