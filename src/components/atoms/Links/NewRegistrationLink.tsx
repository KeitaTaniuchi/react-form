import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  className: string;
};

const NewRegistrationLink: React.FC<Props> = ({ className }) => {
  return (
    <Link to='/new-registration' className={className}>
      新規登録
    </Link>
  );
};

export default NewRegistrationLink;
