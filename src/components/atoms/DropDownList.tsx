import React from 'react';
import DropDownListType from 'types/dropDownList';

type Props = {
  className: string;
  options: DropDownListType;
  name: string;
};

const DropDownList: React.FC<Props> = ({ className, name, options }) => {
  return (
    <form>
      <select name={name}>
        {options.map((option, index) => (
          <option key={index}>{option.label}</option>
        ))}
      </select>
    </form>
  );
};

export default DropDownList;
