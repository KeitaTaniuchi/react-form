import React from 'react';
import DropDownListType from 'types/dropDownList';

type Props = {
  placeHolder: string;
  options: DropDownListType[];
  name: string;
  setDropDownValue: (value: number) => void;
};

const DropDownList: React.FC<Props> = ({ placeHolder, options, name, setDropDownValue }) => {
  return (
    <form>
      <select
        name={name}
        onChange={(e: React.FormEvent<HTMLSelectElement>) => {
          //「e.currentTarget.value」の型がstringのため、number型に変換
          //なぜstring型なのかは不明
          setDropDownValue(Number(e.currentTarget.value));
        }}
        className='form-select appearance-none
      block
      w-full
      px-4
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
      >
        <option disabled selected>
          {placeHolder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value} placeholder={placeHolder}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default DropDownList;
