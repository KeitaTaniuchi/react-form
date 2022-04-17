import React from 'react';
import OuterBorder from 'components/atoms/QuestionOuterBorderRelation/OuterBorder';
import QuestionDetail from 'components/atoms/QuestionOuterBorderRelation/QuestionDetail';
import StepNumber from 'components/atoms/QuestionOuterBorderRelation/StepNumber';

type Props = {
  className: string;
  children: React.ReactNode;
};

const QuestionOuterBorder: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
      <OuterBorder className={'outerBorder'}>
        <QuestionDetail className={'QuestionDetail'} questionDetail={'test'}></QuestionDetail>
        <StepNumber className={'stepNumber'} stepNumber={1} />
        {children}
      </OuterBorder>
    </div>
  );
};

export default QuestionOuterBorder;
