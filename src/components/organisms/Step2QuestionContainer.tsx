import React, { useState } from 'react';
import QuestionOuterBorder from 'components/molecules/QuestionOuterBorder';
import Step2Q1 from 'components/molecules/Step2Q1';
import Step2Q2 from 'components/molecules/Step2Q2';
import Step2Q3 from 'components/molecules/Step2Q3';

const Step2QuestionContainer = () => {
  const [q1Checked, setQ1Checked] = useState<boolean>(false);
  const [q2Checked, setQ2Checked] = useState<boolean>(false);

  const q2Show = (): string => {
    return q1Checked ? '' : 'hidden';
  };

  const q3Show = (): string => {
    return q1Checked && q2Checked ? '' : 'hidden';
  };

  return (
    <>
      <QuestionOuterBorder stepNumber={2} questionDetail={'以下にお答えください'}>
        <div>
          <Step2Q1 setQ1Checked={setQ1Checked} />
        </div>
        <div className={`mt-10 ${q2Show()}`}>
          <Step2Q2 setQ2Checked={setQ2Checked} />
        </div>
        <div className={`mt-10 ${q3Show()}`}>
          <Step2Q3 />
        </div>
      </QuestionOuterBorder>
    </>
  );
};

export default Step2QuestionContainer;
