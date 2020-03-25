import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme = {
  
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: '#1a202c';
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: '#f7fafc';
  }
`;