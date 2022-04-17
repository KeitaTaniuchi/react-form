import React from 'react';

type Props = {
  className: string;
};

const TextArea: React.FC<Props> = ({ className }) => {
  return <textarea className={className}></textarea>;
};

export default TextArea;
