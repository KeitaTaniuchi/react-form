import React from 'react';

type ButtonProps = {
  className: string;
  label: String;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ className, label, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
