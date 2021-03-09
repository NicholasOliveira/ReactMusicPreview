import styled from 'styled-components';

export const HeadingH3 = styled.h3`
  padding: 0px 0px;
  margin: 0px;
  font-size: var(--${(props) => props.font});
  font-weight: normal;
  text-align: ${(props) => props.align};
  max-width: var(--${(props) => props.size});
  color: var(--primary);
`;
