import React from 'react';

type Props = {
  className: string;
};

const Step3Q1Label: React.FC<Props> = ({ className }) => {
  return <p className={className}>-ご相談内容-</p>;
};

export default Step3Q1Label;
