import React from 'react';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const GoNextPageButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      type='button'
      className='inline-block px-5 py-3.5 bg-blue-500  text-white font-medium text-base leading-tight uppercase rounded shadow-lg hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out'
      onClick={onClick}
    >
      次に進む　＞
    </button>
  );
};

export default GoNextPageButton;
