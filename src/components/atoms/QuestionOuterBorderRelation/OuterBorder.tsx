import React from 'react';

type Props = {
  children: React.ReactNode;
};

const QuestionOuterBorder: React.FC<Props> = ({ children }) => {
  return <div className='border border-blue-500 rounded relative'>{children}</div>;
};

export default QuestionOuterBorder;
