import React from 'react';

type DropDownListProps = {
  className: string;
  dropDownListOptions: string[];
  name: string;
  label: String;
};

const DropDownList: React.FC<DropDownListProps> = ({ className, name, dropDownListOptions, label }) => {
  return (
    <select name={name}>
      {dropDownListOptions.map((dropDownListOption, index) => (
        <option>{dropDownListOption}</option>
      ))}
    </select>
  );
};

export default DropDownList;
