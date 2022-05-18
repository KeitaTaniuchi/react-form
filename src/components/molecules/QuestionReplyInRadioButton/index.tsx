import React from 'react';
import RadioButton from 'components/atoms/RadioButton/index';
import RadioButtonType from 'types/radioButton';

type Props = {
  label: string;
  options: RadioButtonType;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const QuestionReplyInRadioButton: React.FC<Props> = ({ label, options, name, onChange }) => {
  return (
    <>
      <p className='mb-2'>{label}</p>
      <RadioButton options={options} name={name} onChange={onChange} />
    </>
  );
};

export default QuestionReplyInRadioButton;
