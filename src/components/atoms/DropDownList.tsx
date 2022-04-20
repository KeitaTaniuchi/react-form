import React from 'react';
import DropDownListType from 'types/dropDownList';
import Select from 'react-select';

type Props = {
  placeHolder: string;
  options: DropDownListType;
  name: string;
  setState: (value: number) => void;
};

const DropDownList: React.FC<Props> = ({ placeHolder, options, name, setState }) => {
  return (
    <form>
      <Select
        placeholder={placeHolder}
        name={name}
        options={options}
        onChange={(option: any) => {
          setState(option.value);
        }}
      />
    </form>
  );
};

export default DropDownList;
