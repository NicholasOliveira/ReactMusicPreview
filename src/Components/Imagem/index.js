import React from 'react';

import { Container, Img } from './styles';

function Imagem({data}) {
  return (
    <Container size={data.size}>
      <Img src={data.url} />
    </Container>
  );
}

export default Imagem;