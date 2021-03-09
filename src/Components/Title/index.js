import React from 'react';

import { HeadingH2 } from './styles';

function Title({ data }) {
  return (
    <HeadingH2 align={data.align} font={data.font} size={data.size}>
      {data.text}
    </HeadingH2>
  );
}

export default Title;
