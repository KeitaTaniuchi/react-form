import React from 'react';
import questionLabels from 'utils/questionLabels';
import TextArea from 'components/atoms/TextArea';

type Props = {
  className?: string;
};

const Step3Q1: React.FC<Props> = ({ className }) => {
  const idAndFor: string = 'step3-q1';

  return (
    <div className={className}>
      <label htmlFor={idAndFor} className='block mb-2'>
        {questionLabels.step3.q1}
      </label>
      <TextArea id={idAndFor} className={'w-full h-full'} />
    </div>
  );
};

export default Step3Q1;
