import React from 'react';

type Props = {
  className: string;
  label: String;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({ className, label, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
