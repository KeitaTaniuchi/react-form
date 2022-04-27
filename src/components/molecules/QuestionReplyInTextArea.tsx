import React from 'react';
import TextArea from 'components/atoms/TextArea';

type Props = {
  idAndFor: string;
  label: string;
};

const QuestionReplyInTextArea: React.FC<Props> = ({ idAndFor, label }) => {
  return (
    <>
      <label htmlFor={idAndFor} className='block mb-2'>
        {label}
      </label>
      <TextArea id={idAndFor} />
    </>
  );
};

export default QuestionReplyInTextArea;
