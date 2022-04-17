import React from 'react';

type Props = {
  className: string;
};

const Step2Q1Label: React.FC<Props> = ({ className }) => {
  return <p className={className}>-現在、生命保険に加入されていますか？-</p>;
};

export default Step2Q1Label;
