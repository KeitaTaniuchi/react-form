import React from 'react';

type LinkProps = {
  className: string;
  label: String;
};

const Button: React.FC<LinkProps> = ({ className, label }) => {
  return <link className={className}>{label}</link>;
};

export default Button;
