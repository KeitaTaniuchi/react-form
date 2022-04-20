import DropDownListType from 'types/dropDownList';
import dayjs from 'dayjs';
dayjs.locale('ja');

const createYears = (): DropDownListType => {
  const years = [
    {
      value: 0,
      label: '-年を選択してください-',
    },
  ];
  for (let i = dayjs().year(); i >= dayjs().year() - 100; i--) {
    if (i > 2018) {
      years.push({ value: i, label: `${i}年 (令和${i - 2018}年)` });
    } else if (i > 1988) {
      years.push({ value: i, label: `${i}年 (平成${i - 1988}年)` });
    } else if (i > 1925) {
      years.push({ value: i, label: `${i}年 (昭和${i - 1925}年)` });
    } else if (i > 1911) {
      years.push({ value: i, label: `${i}年 (大正${i - 1911}年)` });
    }
  }
  return years;
};

const createMonths = (): DropDownListType => {
  const months = [
    {
      value: 0,
      label: '-月を選択してください-',
    },
  ];
  for (let i = 1; i <= 12; i++) {
    months.push({ value: i, label: `${i}月` });
  }
  return months;
};

const createDays = (year: number, month: number): DropDownListType => {
  const days = [
    {
      value: 0,
      label: '-日を選択してください-',
    },
  ];
  /* 初期値 */
  if (year === 0 || month === 0)
    for (let i = 1; i <= 31; i++) {
      days.push({ value: i, label: `${i}日` });
    }
  /* 年と月選択後 */ else
    for (let i = 1; i <= dayjs(`'${year}-${month}-01'`).daysInMonth(); i++) {
      days.push({ value: i, label: `${i}日` });
    }
  return days;
};

export { createYears, createMonths, createDays };
