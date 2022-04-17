import React from 'react';

type Props = {
  className: string;
};

const Step1Q1Label: React.FC<Props> = ({ className }) => {
  return <p className={className}>-性別-</p>;
};

export default Step1Q1Label;
