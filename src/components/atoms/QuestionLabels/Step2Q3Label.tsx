import React from 'react';

type Props = {
  className: string;
};

const Step2Q3Label: React.FC<Props> = ({ className }) => {
  return (
    <p className={className}>
      -過去5年以内に病気や怪我で手術を受けたこと、または継続して7日以上の入院をしたことがありますか？-
    </p>
  );
};

export default Step2Q3Label;
