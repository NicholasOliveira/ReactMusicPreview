import React, { useState } from 'react';

import { Container, InputText } from './styles';

function Input(props) {
  const [input,setInput] = useState('');
  function handleOnChange(e){
    setInput(e.target.value);
  }
  return (
    <Container>
      <InputText
        {...props}
        type={props.type||'text'}
        placeholder={props.placeholder||'Digite aqui'}
        value={props.value||input}
        onChange={props.onChange||handleOnChange}
      />
    </Container>
  );
}

export default Input;