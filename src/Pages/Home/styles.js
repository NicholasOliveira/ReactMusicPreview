import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  margin-top: 2.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  width: 75%;
  flex-direction: column;
  @media(max-width: 800px) {
    width: 100%;
    margin-top: 5rem;
  }
`;
