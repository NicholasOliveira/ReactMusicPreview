import React from 'react';

import { Container } from './styles';

function PlayerMusic({item}) {
  return (
  <Container>
    <audio 
      controls="controls"
      id="player"
      autoPlay
      src={item?.preview_url} />
  </Container>
  );
}

export default PlayerMusic;