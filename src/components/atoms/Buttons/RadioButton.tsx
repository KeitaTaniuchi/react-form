import React from 'react';
import RadioButtonType from 'types/radioButton';

type Props = {
  options: RadioButtonType;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const RadioButton: React.FC<Props> = ({ options, name, onChange }) => {
  return (
    <form>
      {options.map((option, index) => (
        <label key={index} className='mr-8'>
          <input type='radio' name={name} value={option} onChange={onChange} className='mr-2' />
          {option}
        </label>
      ))}
    </form>
  );
};

export default RadioButton;
