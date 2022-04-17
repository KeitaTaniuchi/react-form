import React from 'react';

type Props = {
  className: string;
  stepNumber: number;
};

const StepNumber: React.FC<Props> = ({ className, stepNumber }) => {
  return (
    <span className={className}>
      <p>{`STEP${stepNumber}`}</p>
    </span>
  );
};

export default StepNumber;
