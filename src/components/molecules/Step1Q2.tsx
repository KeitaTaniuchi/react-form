import React, { useState } from 'react';
import DropDownList from 'components/atoms/DropDownList';
import questionLabels from 'utils/questionLabels';
import { createYears, createMonths, createDays } from 'utils/createDateDropDownListOptions';

const Step1Q2: React.FC = () => {
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [day, setDay] = useState<number>(0);

  return (
    <>
      <p className='mb-2'>{questionLabels.step1.q2}</p>
      <div className='mb-2'>
        <DropDownList options={createYears()} name={'years'} setState={setYear} />
      </div>
      <div className='mb-2'>
        <DropDownList options={createMonths()} name={'months'} setState={setMonth} />
      </div>
      <DropDownList options={createDays(year, month)} name={'days'} setState={setDay} />
    </>
  );
};

export default Step1Q2;
