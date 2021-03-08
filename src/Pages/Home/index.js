import React, {useEffect, useState, useContext} from 'react';
import ArtistItem from '../../Components/ArtistItem';
import ArtistContainer from '../../Components/ArtistContainer';
import SearchBar from '../../Components/SearchBar';
import Title from '../../Components/Title';
import Spacer from '../../Components/Spacer';
import { Container } from './styles';
import { ContextAuth, ContextData } from '../../Context';
import search from '../../helpers/makeRequest'

function Home() {
  const [album,setAlbum] = useState('');
  const [sourceInfo,setSourceInfo] = useState();
  const { token } = useContext(ContextAuth);
  const { 
    data,
    setData,
    visitedAlbum,
    setVisitedAlbum,
  } = useContext(ContextData);

  async function handleSearch(value){
    setAlbum(value);
    const response = await search(value,sourceInfo,setSourceInfo,token);
    setData(response?.albums||{items:[0,1,2,3,4]});
  }
  return (
    <Container>
    <Title 
      data={{
        text:'Busque por artistas, álbuns ou músicas', 
        size: 'largebox', 
        font: 'small',
        align:'left'}} 
      />
      <SearchBar 
        setAlbum={handleSearch}
        album={album}
      />
      <Spacer 
        width='100%'
        height='2.8125rem' 
      />
      {
        album?<Title 
          data={{
            text: `Resultado encontrados para "${album}"`,
            size: 'largebox',
            font: 'small',
            align:'left'}}
        />:<Title 
        data={{
          text:'Álbuns buscados recentemente', 
          size: 'largebox', 
          font: 'medium',
          align:'left'}} 
        />
      }
    
      <ArtistContainer>
        {data?.items.map(((item,index)=>(
          <ArtistItem
            album={item}
            key={item.id&&item.id||index}
          />
        )))} 
        </ArtistContainer>
        <Spacer 
          width='100%'
          height='2.8125rem'
        />
        {visitedAlbum.length>0&&
          <Title 
            data={{
            text:'Álbuns acessados recentemente', 
            size: 'largebox', 
            font: 'medium',
            align:'left'}} 
        />
    }
      <ArtistContainer>
        {visitedAlbum.reverse().map(((item,index)=>(
          <ArtistItem 
          album={item}
          key={item.id&&item.id||index}
          />
        )))} 
        </ArtistContainer>
        <Spacer 
          width='100%'
          height='6.25rem'
        />
    </Container>
  );
}

export default Home;