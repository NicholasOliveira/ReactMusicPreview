import React from 'react';

import { LinkTo } from './styles';

function Link({ data }) {
  return (
    <LinkTo to={data.link} align={data.align} font={data.font} size={data.size}>
      {data.text}
    </LinkTo>
  );
}

export default Link;
