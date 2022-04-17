import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  className: string;
};

const LoginLink: React.FC<Props> = ({ className }) => {
  return (
    <Link to='/login' className={className}>
      ログイン
    </Link>
  );
};

export default LoginLink;
