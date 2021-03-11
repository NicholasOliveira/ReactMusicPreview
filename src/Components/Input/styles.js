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
  height: 2.5rem;
  padding: 5px 10px;
  font-size: var(--${(props) => props.fontSize || 'medium'});
  line-height: var(--${(props) => props.fontSize || 'medium'});
  color: var(--white);
  font-weight: normal;
  background-color: transparent;
  outline: 0;
  @media (max-width: 560px) {
    padding: 2px 10px 0px;
    margin-bottom: 5px;
  }
  &:placeholder {
    color: var(--white);
    font-weight: normal;
  }
`;
