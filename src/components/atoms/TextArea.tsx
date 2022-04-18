import React from 'react';

type Props = {
  id: string;
  className?: string;
};

const TextArea: React.FC<Props> = ({ id, className }) => {
  return (
    <textarea
      id={id}
      className='form-control
        block
        w-full
        h-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
    ></textarea>
  );
};

export default TextArea;
