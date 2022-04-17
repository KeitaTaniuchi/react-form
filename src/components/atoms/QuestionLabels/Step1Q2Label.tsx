import React from 'react';

type Props = {
  className: string;
};

const Step1Q2Label: React.FC<Props> = ({ className }) => {
  return <p className={className}>-生年月日-</p>;
};

export default Step1Q2Label;
