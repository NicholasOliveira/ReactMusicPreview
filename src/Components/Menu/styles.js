import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  padding: ${(props) => (props.openMenu ? '0 1.25rem' : '0 0')};
  list-style: none;
  background-color: var(--primary);
  position: absolute;
  width: ${(props) => (props.openMenu ? '12.75rem' : '0')};
  right: 5rem;
  top: 1.375rem;
  justify-content: space-around;
  align-items: center;
  color: var(--white);
  transition: all 0.3s;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  padding: ${(props) => (props.openMenu ? '0.625rem 0' : '0 0')};
  font-size: ${(props) => (props.openMenu ? '1rem' : '0')};
  transition: all 0.1s;
  text-transform: capitalize;
  &:hover {
    opacity: 70%;
  }
`;
