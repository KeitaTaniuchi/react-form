import React from 'react';

type Props = {
  className: string;
};

const AppTitle: React.FC<Props> = ({ className }) => {
  return <p className={className}>Sample App</p>;
};

export default AppTitle;
