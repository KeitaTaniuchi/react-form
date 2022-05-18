import React from 'react';

type Props = {
  questionDetail: string;
  stepNumber: number;
  children: React.ReactNode;
};

const QuestionOuterBorder: React.FC<Props> = ({ questionDetail, stepNumber, children }) => {
  return (
    <div className='border border-blue-500 rounded relative'>
      <p className='py-4 items-center text-center text-xl bg-blue-500 bg-opacity-40 border-b border-blue-500 rounded'>
        {questionDetail}
      </p>
      <span className='px-2 py-1 text-white bg-blue-500 rounded absolute top-0 left-0'>{`STEP${stepNumber}`}</span>
      <div className='p-5'>{children}</div>
    </div>
  );
};

export default QuestionOuterBorder;
