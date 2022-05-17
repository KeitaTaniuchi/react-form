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
        h-full
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white
        bg-clip-padding px-3
        py-1.5 text-base font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
      ></textarea>
    </div>
  );
};

export default TextArea;
