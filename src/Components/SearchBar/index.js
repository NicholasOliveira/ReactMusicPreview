import React from 'react';
import { Container, InputText } from './styles';

function SearchBar({setAlbum,album,...props}) {
  function handleOnChange(e){
    setAlbum(e.target.value);
  }
  return (
    <Container>
      <InputText
        {...props}
        type="search"
        value={album}
        onChange={handleOnChange}
        placeholder="Comece a escrever..." 
      />
    </Container>
  );
}

export default SearchBar;