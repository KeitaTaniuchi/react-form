import React from 'react';
import TextArea from 'components/atoms/TextArea/index';

type Props = {
  idAndFor: string;
  label: string;
};

const QuestionReplyInTextArea: React.FC<Props> = ({ idAndFor, label }) => {
  return (
    <>
      <label htmlFor={idAndFor} className='mb-2 block'>
        {label}
      </label>
      <TextArea id={idAndFor} />
    </>
  );
};

export default QuestionReplyInTextArea;
