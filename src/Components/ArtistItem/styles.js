import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  margin: 1.875rem 0px;
  margin-right: 4.6875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:nth-child(5){
    margin-right: 0px;
  }
  &:nth-child(10){
    margin-right: 0px;
  }
`;
