import React from 'react';

type Props = {
  className?: string;
  stepNumber: number;
};

const StepNumber: React.FC<Props> = ({ className, stepNumber }) => {
  return <span className={className}>{`STEP${stepNumber}`}</span>;
};

export default StepNumber;
