import React from 'react';

type Props = {
  id: string;
};

const TextArea: React.FC<Props> = ({ id }) => {
  return (
    <div className='h-full'>
      <textarea
        id={id}
        className='
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
      ></textarea>
    </div>
  );
};

export default TextArea;
