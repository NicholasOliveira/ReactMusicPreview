import styled, { createGlobalStyle } from 'styled-components';
import { Dark, Light } from '../../theme';

export const Theme = createGlobalStyle`
:root{
    ${(props) => props.theme === 'dark' && Dark}
    ${(props) => props.theme === 'light' && Light}
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: var(--background);
  padding: 10px 20px;
`;

export const Logo = styled.img`
  cursor: pointer;
  max-width: 2.8125rem;
  max-height: 2.8125rem;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Profile = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8125rem;
  height: 2.8125rem;
  position: absolute;
  border-radius: 100%;
  background-color: var(--secondary);
  top: 20px;
  right: 20px;
  transition: background 0.3s;
  > img {
    max-width: 2rem;
    max-height: 2rem;
  }
  &:hover {
    opacity: 50%;
  }
`;
