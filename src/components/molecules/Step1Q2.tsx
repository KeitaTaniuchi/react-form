import React from 'react';
import DropDownList from 'components/atoms/DropDownList';
import Step1Q2Label from 'components/atoms/QuestionLabels/Step1Q2Label';
import { createYears, createMonths, createDays } from 'utils/createDateDropDownListOptions';

type Props = {
  className: string;
};

const Step1Q2: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Step1Q2Label className={'step1Q2Label'} />
      <DropDownList className={'years'} options={createYears()} name={'years'} />
      <DropDownList className={'months'} options={createMonths()} name={'months'} />
      <DropDownList className={'days'} options={createDays(3, 5)} name={'days'} />
    </div>
  );
};

export default Step1Q2;
