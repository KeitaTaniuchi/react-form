import React from 'react';
import OuterBorder from 'components/atoms/QuestionOuterBorderRelation/OuterBorder';
import QuestionDetail from 'components/atoms/QuestionOuterBorderRelation/QuestionDetail';
import StepNumber from 'components/atoms/QuestionOuterBorderRelation/StepNumber';

type Props = {
  className?: string;
  stepNumber: number;
  questionDetail: string;
  children: React.ReactNode;
};

const QuestionOuterBorder: React.FC<Props> = ({ className, stepNumber, questionDetail, children }) => {
  return (
    <div className={className}>
      <OuterBorder className={'border border-blue-500 rounded relative'}>
        <QuestionDetail
          className={'py-4 items-center text-center text-xl bg-blue-500 bg-opacity-40 border-b border-blue-500 rounded'}
          questionDetail={questionDetail}
        ></QuestionDetail>
        <StepNumber
          className={'px-2 py-1 text-white bg-blue-500 rounded absolute top-0 left-0'}
          stepNumber={stepNumber}
        />
        <div className='p-5'>{children}</div>
      </OuterBorder>
    </div>
  );
};

export default QuestionOuterBorder;
