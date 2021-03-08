import React from 'react';
import { Container } from './styles';

function ArtistContainer({children}) {
  return (
    <Container key={children?.key}>
      {children}
    </Container>
  );
}

export default ArtistContainer;