import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3.3125rem;
  justify-content: center;
  align-items: center;
`;

export const Buttonbox = styled.button`
  cursor: pointer;
  border: 0px;
  border: 2px solid var(--primary);
  width: 60%;
  height: 2.5rem;
  padding: 5px 10px;
  font-size: var(--${(props) => props.fontSize || 'medium'});
  line-height: var(--extralarge);
  color: var(--white);
  font-weight: bold;
  background-color: transparent;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
