import React from 'react';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Imagem from '../Imagem';
import { ContainerLink } from './styles';

function ArtistItem({album,data}) {
  return (
    <ContainerLink
      to={{
        pathname: `/albums/${(album?.artists&&album?.artists[0].name)||'Nome do artista'}`,
        state: {idAlbum:album?.id}
      }}
    >
      <Imagem 
        data={{
          url:(album?.images&&album.images[0].url)||`https://via.placeholder.com/${data?.imgSize || '160'}`, 
          size:data?.size||'smallbox'
          }} 
      />
      <Title 
      data={{
        text:album?.name||'Nome do álbum', 
        size: data?.size||'smallbox', 
        font: data?.font||'extrasmall',
        align:'center'}} 
      />
      <Subtitle 
      data={{
        text:(album?.artists&&album?.artists[0].name)||'Nome do artista', 
        size: data?.size||'smallbox', 
        font: data?.font||'extrasmall', 
        align:'center'}} 
      />
    </ContainerLink>
  );
}

export default ArtistItem;