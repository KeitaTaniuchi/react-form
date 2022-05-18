import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/index';

type Props = {
  path: string;
};

const GoNextPageButton: React.FC<Props> = ({ path }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(path);
      }}
      label={'次に進む　＞'}
    />
  );
};

export default GoNextPageButton;
