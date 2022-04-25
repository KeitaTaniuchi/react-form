import React from 'react';
import DropDownListType from 'types/dropDownList';
import Select from 'react-select';

type Props = {
  placeHolder: string;
  options: DropDownListType[];
  name: string;
  setDropDownValue: (value: number) => void;
};

const DropDownList: React.FC<Props> = ({ placeHolder, options, name, setDropDownValue }) => {
  return (
    <form>
      <Select
        placeholder={placeHolder}
        name={name}
        options={options}
        onChange={(option: /* NonNullable<DropDownListType> */ any) => {
          /* 型エラーを解消するために、ライブラリ名「react-select」の型定義を一部変更しています */
          /* (変更した型定義の定義場所) /node_modules/react-select/dist/declarations/src/types.d.ts */
          setDropDownValue(option.value);
        }}
      />
    </form>
  );
};

export default DropDownList;
