import styled from 'styled-components';

export const Container = styled.div`
  width: var(--${(props) => props.size});
  height: var(--${(props) => props.size});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 100%;
  align-self: center;
  transition: all 0.3s;
  &:hover {
    opacity: 50%;
  }
`;
