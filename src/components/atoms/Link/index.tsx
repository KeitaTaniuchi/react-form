import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  label: string;
};

const CommonLink: React.FC<Props> = ({ to, label }) => {
  return (
    <Link to={to} className=' hover:underline '>
      {label}
    </Link>
  );
};

export default CommonLink;
