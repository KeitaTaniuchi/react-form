import React from 'react';

type Props = {
  className: string;
  label: String;
};

const Button: React.FC<Props> = ({ className, label }) => {
  return <link className={className}>{label}</link>;
};

export default Button;
