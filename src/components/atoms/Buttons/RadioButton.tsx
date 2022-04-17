import React from 'react';
import RadioButtonType from 'types/radioButton';

type Props = {
  className: string;
  options: RadioButtonType;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const RadioButton: React.FC<Props> = ({ className, options, name, onChange }) => {
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
