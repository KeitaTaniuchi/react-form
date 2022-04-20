import React from 'react';

type Props = {
  stepNumber: number;
};

const StepNumber: React.FC<Props> = ({ stepNumber }) => {
  return <span className='px-2 py-1 text-white bg-blue-500 rounded absolute top-0 left-0'>{`STEP${stepNumber}`}</span>;
};

export default StepNumber;
