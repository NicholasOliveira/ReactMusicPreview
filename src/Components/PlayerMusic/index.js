import React, { useContext } from 'react';
import { Container } from './styles';
import { ContextAuth } from '../../Context';

function PlayerMusic({ item }) {
  const { token } = useContext(ContextAuth);
  return (
    <Container>
      {token && (
        <audio
          controls="controls"
          id="player"
          autoPlay
          src={item?.preview_url}
        />
      )}
    </Container>
  );
}

export default PlayerMusic;
