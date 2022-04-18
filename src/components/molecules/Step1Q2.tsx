import React from 'react';
import DropDownList from 'components/atoms/DropDownList';
import questionLabels from 'utils/questionLabels';
import { createYears, createMonths, createDays } from 'utils/createDateDropDownListOptions';

type Props = {
  className?: string;
};

const Step1Q2: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <p className='mb-2'>{questionLabels.step1.q2}</p>
      <DropDownList className={'mb-2'} options={createYears()} name={'years'} />
      <DropDownList className={'mb-2'} options={createMonths()} name={'months'} />
      <DropDownList options={createDays(3, 5)} name={'days'} />
    </div>
  );
};

export default Step1Q2;
