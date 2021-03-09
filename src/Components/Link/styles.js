import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkTo = styled(Link)`
  padding: 0.625rem 0px;
  margin: 0px;
  text-decoration: none;
  font-size: var(--${(props) => props.font});
  font-weight: normal;
  max-width: var(--${(props) => props.size});
  text-align: ${(props) => props.align};
  color: var(--secondary);
`;
