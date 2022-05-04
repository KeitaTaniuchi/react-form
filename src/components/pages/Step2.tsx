import React, { useState } from 'react';
import QuestionOuterBorder from 'components/organisms/QuestionOuterBorder';
import Step2Q1 from 'components/organisms/Step2Q1';
import Step2Q2 from 'components/organisms/Step2Q2';
import Step2Q3 from 'components/organisms/Step2Q3';
import GoNextPageButton from 'components/molecules/GoNextPageButton';
import BackPrevPageButton from 'components/molecules/BackPrevPageButton';

const Step2 = () => {
  const [q1Checked, setQ1Checked] = useState<boolean>(false);
  const [q2Checked, setQ2Checked] = useState<boolean>(false);

  const q2Show = (): string => {
    return q1Checked ? '' : 'hidden';
  };

  const q3Show = (): string => {
    return q1Checked && q2Checked ? '' : 'hidden';
  };

  return (
    <div className='mx-auto mt-10 w-9/12'>
      <QuestionOuterBorder stepNumber={2} questionDetail={'以下にお答えください'}>
        <Step2Q1 setQ1Checked={setQ1Checked} />
        <div className={`mt-10 ${q2Show()}`}>
          <Step2Q2 setQ2Checked={setQ2Checked} />
        </div>
        <div className={`mt-10 ${q3Show()}`}>
          <Step2Q3 />
        </div>
      </QuestionOuterBorder>
      <div className='mt-10 flex  justify-center space-x-20'>
        <BackPrevPageButton path={'/step1'} />
        <GoNextPageButton path={'/step3'} />
      </div>
    </div>
  );
};

export default Step2;
