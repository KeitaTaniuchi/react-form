import React from 'react';

type Props = {
  className: string;
  questionDetail: string;
};

const QuestionDetail: React.FC<Props> = ({ className, questionDetail }) => {
  return (
    <div className={className}>
      <p>questionDetail</p>
    </div>
  );
};

export default QuestionDetail;
