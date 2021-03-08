import React from 'react';
import axios from '../services/api';
import {endPoints} from '../__Config';

const search = async (
  value,
  sourceInfo,
  setsourceInfo,
  token,
  TypeEndPoint='AlbumEndPoint',
  idAlbumTracks=0,
  idAlbum=0,
  ) => {
  let searchTerm = value;

  if (sourceInfo) { 
    sourceInfo.cancel('Operation canceled by the user.') 
  }

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let loading = true;
  setsourceInfo(source)

  const finallyEndpoint = endPoints(
    {
      idAlbumTracks,
      idAlbum,
      searchTerm
    });
  try {
    const res = await axios.get(finallyEndpoint[TypeEndPoint],{
      cancelToken: source.token,
      method: 'get',
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    setsourceInfo(undefined);
    return await res.data;

  } catch (err) {
    //console.log(err)
  }
}
export default search;