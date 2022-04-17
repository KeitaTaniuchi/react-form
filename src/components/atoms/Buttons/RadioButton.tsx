import React from 'react';
import RadioButtonType from 'types/radioButton';

type Props = {
  options: RadioButtonType;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className: string;
};

const RadioButton: React.FC<Props> = ({ options, name, onChange, className }) => {
  return (
    <form>
      {options.map((option, index) => (
        <label key={index}>
          <input type='radio' name={name} value={option} onChange={onChange} className={className} />
          {option}
        </label>
      ))}
    </form>
  );
};

export default RadioButton;
