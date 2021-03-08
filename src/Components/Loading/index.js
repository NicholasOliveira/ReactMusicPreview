import React from 'react';
import LoadingGif from '../../static/images/loading.gif';
import { Container } from './styles';

function Loading() {
  return (
  <Container>
    <img src={LoadingGif} />
  </Container>
  );
}

export default Loading;