import React, { useState } from 'react';

import { Container, Buttonbox } from './styles';

function Button(props) {
  function handleOnChange(e) {
    setButton(e.target.value);
  }
  return (
    <Container>
      <Buttonbox {...props} type={props.type || 'button'}>
        {props.value || 'Enviar'}
      </Buttonbox>
    </Container>
  );
}

export default Button;
