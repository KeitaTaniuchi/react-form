import React from 'react';

type RadioButtonProps = {
  className: string;
  radioButtonOptions: string[];
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const RadioButton: React.FC<RadioButtonProps> = ({ className, radioButtonOptions, name, onChange }) => {
  return (
    <form>
      {radioButtonOptions.map((radioButtonOption, index) => (
        <label key={index}>
          <input type='radio' name={name} value={radioButtonOption} onChange={onChange} className={className}>
            {radioButtonOption}
          </input>
        </label>
      ))}
    </form>
  );
};

export default RadioButton;
