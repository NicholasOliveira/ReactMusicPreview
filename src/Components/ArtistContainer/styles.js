import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media(max-width: 800px) {
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    overflow-x: scroll;
  }
`;
