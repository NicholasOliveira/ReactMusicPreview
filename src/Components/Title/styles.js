import styled from 'styled-components';

export const HeadingH2 = styled.h2`
  padding: 0.625rem 0px;
  margin: 0px;
  font-size: var(--${props=>props.font});
  font-weight: normal;
  max-width: var(--${props=>props.size});
  text-align: ${props=>props.align};
  color: var(--secondary)
`;