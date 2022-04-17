import React from 'react';

type Props = {
  className: string;
};

const Step2Q2Label: React.FC<Props> = ({ className }) => {
  return (
    <p className={className}>
      -現在、入院中ですか？ または,最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？-
    </p>
  );
};

export default Step2Q2Label;
