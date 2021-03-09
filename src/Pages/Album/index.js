import React, {useEffect, useState, useContext, useRef} from 'react';
import ArtistItem from '../../Components/ArtistItem';
import Title from '../../Components/Title';
import Spacer from '../../Components/Spacer';
import { 
  Container, 
  AlbumContainer, 
  PlaylistContainer,
  PlaylistMusic 
} from './styles';
import { ContextAuth, ContextData, ContextPlay } from '../../Context';
import search from '../../helpers/makeRequest'
import {endPoints} from '../../__Config';
import millisToTime from '../../utils/millisToTime';
import noNameBig from '../../utils/noNameBig';
import PlayerMusic from '../../Components/PlayerMusic';
import Link from '../../Components/Link';
import Loading from '../../Components/Loading';

function Album(props) {
  const { idAlbum } = props.location.state;
  const [data,setData] = useState({items:[0,1,2,3]});
  
  const [detailAlbum,setDetailAlbum] = 
  useState({});

  const [sourceInfo,setSourceInfo] = useState();
  const {token} = useContext(ContextAuth);
  const {visitedAlbum,setVisitedAlbum} = useContext(ContextData);
  const {setItemPlay} = useContext(ContextPlay);
  const [isError,setIsError] = useState();
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    async function getData(){
      setIsError(false);
      setIsLoading(true);
      try{
        const response = await search('',sourceInfo,setSourceInfo,token,'tracksAlbumEndPoint',idAlbum,0);

        const dataAlbum = await search('',sourceInfo,setSourceInfo,token,'detailAlbumEndPoint',idAlbum,idAlbum);

        setVisitedAlbum([...visitedAlbum,dataAlbum]);

        setData(response||{items:[0,1,2,3,4]});
        setDetailAlbum(dataAlbum||{})
        setIsLoading(false);
      }catch{
        setIsError(true);
        setIsLoading(false);
      }
    }
    getData();
    return function() {
      isError===true&&null;
    };
  },[token,idAlbum]) 

  function playMusic(item){
    setItemPlay(item);
  }

  return (
    <Container>
    <Link 
      data={{
        link: '/home',
        text:'< Voltar', 
        size: 'largebox', 
        font: 'small',
        align:'left'}} 
      />
      <Spacer 
        width='100%'
        height='0.5rem' 
      />
      {
        !isLoading?
        <AlbumContainer>
        {[detailAlbum]?.map(((item,index)=>(
          <ArtistItem 
          data={{
            size: 'mediumbox', 
            font:'medium',
            imgSize: '240',
          }} 
          album={{
            images: item?.images,
            ...item,
            name:item?.name
            ||'Nome do álbum grande de duas linhas'
          }}
          key={index} />
        )))}
        <PlaylistContainer>
        {data?.items.map(((item,index)=>(
          <PlaylistMusic key={index+1}>
            <span>
            <span>
              {index+1}.
            </span> 
            {
            item?.name 
              ? noNameBig(item.name,60)
              :'Nome da faixa'
            }
            </span>
            <span>
            {
              item?.duration_ms
              ?millisToTime(item.duration_ms)
              :'0:00'
            }
            &nbsp;-&nbsp;
            {
            item?.duration_ms&&(<button 
              onClick={()=>playMusic(item)}>
            [Preview]
            </button>)
            }
            
            </span>
          </PlaylistMusic>
        )))}
        </PlaylistContainer>
      </AlbumContainer>:
      <Loading />
      }
      
      <Spacer 
        width='100%'
        height='6.25rem'
      />
    </Container>
  );
}

export default Album;