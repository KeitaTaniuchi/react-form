import React, { useState, useEffect } from 'react';
import DropDownList from 'components/atoms/DropDownList';
import questionLabels from 'utils/questionLabels';
import DropDownListType from 'types/dropDownList';
import { createYears, createMonths, createDays } from 'utils/createDateDropDownListOptions';

const Step1Q2: React.FC = () => {
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const [days, setDays] = useState<DropDownListType>([]);

  useEffect(() => {
    setDays(createDays(year, month));
  }, [year, month]);

  return (
    <>
      <p className='mb-2'>{questionLabels.step1.q2}</p>
      <div className='mb-2'>
        <DropDownList
          placeHolder='- 年を選択してください -'
          options={createYears()}
          name={'years'}
          setState={setYear}
        />
      </div>
      <div className='mb-2'>
        <DropDownList
          placeHolder='- 月を選択してください -'
          options={createMonths()}
          name={'months'}
          setState={setMonth}
        />
      </div>
      <DropDownList placeHolder='- 日を選択してください -' options={days} name={'days'} setState={setDay} />
    </>
  );
};

export default Step1Q2;
