import React from 'react';

type Props = {
  questionDetail: string;
};

const QuestionDetail: React.FC<Props> = ({ questionDetail }) => {
  return (
    <p className='py-4 items-center text-center text-xl bg-blue-500 bg-opacity-40 border-b border-blue-500 rounded'>
      {questionDetail}
    </p>
  );
};

export default QuestionDetail;
