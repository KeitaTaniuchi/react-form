import React from 'react';

type Props = {
  className?: string;
  questionDetail: string;
};

const QuestionDetail: React.FC<Props> = ({ className, questionDetail }) => {
  return <p className={className}>{questionDetail}</p>;
};

export default QuestionDetail;
