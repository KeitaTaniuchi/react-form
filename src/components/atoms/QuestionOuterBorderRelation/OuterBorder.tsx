import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const QuestionOuterBorder: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default QuestionOuterBorder;
