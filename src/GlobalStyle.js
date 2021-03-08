import {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
  body,html,button,textarea{
    font-family: 'Roboto', sans-serif;
  }
`;
