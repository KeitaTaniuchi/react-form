import React from 'react';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
};

const Button: React.FC<Props> = ({ onClick, label }) => {
  return (
    <button
      type='button'
      className='inline-block px-5 py-3.5 bg-blue-500 text-white font-medium text-base leading-tight uppercase rounded shadow-lg hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out'
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
