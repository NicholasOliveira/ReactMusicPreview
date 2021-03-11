import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3.3125rem;
  justify-content: center;
  align-items: center;
`;

export const InputText = styled.input`
  border: 0px;
  border-bottom: 2px solid var(--primary);
  width: 100%;
  height: 3.3125rem;
  padding: 0.9375rem 0.3125rem 1.4375rem;
  font-size: var(--extralarge);
  line-height: var(--extralarge);
  color: var(--white);
  font-weight: bold;
  background-color: transparent;
  outline: 0;
  @media (max-width: 800px) {
    padding: 0.9rem 0.6rem 0.3rem;
    font-size: var(--large);
  }
  &:placeholder {
    color: var(--primary);
    font-weight: normal;
  }
`;
