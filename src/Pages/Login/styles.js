import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  box-shadow: inset -1px 0px 3px 0px var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  h2 {
    color: rgba(255, 255, 255, 0.9);
    font-weight: bold;
  }
`;
