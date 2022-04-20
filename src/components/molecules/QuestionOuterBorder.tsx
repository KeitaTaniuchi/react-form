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
      <OuterBorder>
        <QuestionDetail questionDetail={questionDetail}></QuestionDetail>
        <StepNumber stepNumber={stepNumber} />
        <div className='p-5'>{children}</div>
      </OuterBorder>
    </div>
  );
};

export default QuestionOuterBorder;
