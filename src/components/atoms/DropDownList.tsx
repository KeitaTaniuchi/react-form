import React from 'react';
import DropDownListType from 'types/dropDownList';

type Props = {
  className?: string;
  options: DropDownListType;
  name: string;
};

const DropDownList: React.FC<Props> = ({ className, name, options }) => {
  return (
    <form className={className}>
      <select
        name={name}
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
        {options.map((option, index) => (
          <option key={index}>{option.label}</option>
        ))}
      </select>
    </form>
  );
};

export default DropDownList;
