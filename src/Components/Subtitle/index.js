import React from 'react';

import { HeadingH3 } from './styles';

function Title({data}) {
  return (
  <HeadingH3 
    align={data.align} 
    font={data.font} 
    size={data.size}>
    {data.text}
  </HeadingH3>);
}

export default Title;