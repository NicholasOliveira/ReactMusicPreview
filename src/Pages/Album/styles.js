import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  margin-top: 40px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 75%;
  flex-direction: column;
  @media(max-width: 800px) {
    width: 100%;
    margin-top: 5rem;
  }
`;

export const AlbumContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media(max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
      margin-right: 0px;
    }
  }
`;

export const PlaylistContainer = styled.ul`
  width: 100%;
  margin-top: 1.875rem;
  color: var(--primary);
`;
export const PlaylistMusic = styled.li`
 @media(max-width: 800px) {
      margin: 0.5rem 0px;
  }
  >span{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  audio{
    width: 300px;
    height: 30px;
  }
  audio::-webkit-media-controls-panel {
    width: 100px;
    height: 30px;
    background-color: var(--primary);
    font-size: 10px;
}
  >span>span{
    margin-right: 1rem;
  }
  list-style-type: decimal;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.1rem;
`;

