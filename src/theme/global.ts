import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *  
    { 
        margin: 0; 
        padding: 0; 
        border: 0; 
    }

  html,
  body {
      height: 100%;
    }

  body {
    font-family: 'Roboto', sans-serif;
    color: #000000;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;
