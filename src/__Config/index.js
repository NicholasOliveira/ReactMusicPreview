  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const clientId = "8a17a7a4ea2b484db4454a21acf8ca5c";
  const redirectUri = "http://localhost:8080";
  const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
  ];
  const endPoints = ({
    idAlbumTracks=0,
    idAlbum=0,
    searchTerm=''
  }) => {
    return {
      AlbumEndPoint: `https://api.spotify.com/v1/search?q=${searchTerm}&type=album&market=BR&limit=10&offset=5`,

      tracksAlbumEndPoint: `https://api.spotify.com/v1/albums/${idAlbumTracks}/tracks?market=BR`,
      
      detailAlbumEndPoint: `https://api.spotify.com/v1/albums/${idAlbum}/`,
    }
  }

  export {
    authEndpoint,
    clientId,
    redirectUri,
    scopes,
    endPoints
  }