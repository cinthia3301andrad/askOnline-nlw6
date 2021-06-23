import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFF;
    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;
    --orange-500: rgba(255,193,69,0.84);
    --purple-300: #9F75FF;
    --purple-400: #9164FA; 
    --purple-500: #8257E5;
    --pink-01: #FF60FF;

    --primary_01: #19395E;
    --primary_02: #73B1F7;
    --primary_002: #50BEF7;
    --primary_03: #3A86DE;
    --primary_04: #35485E;
    --primary_05:#2C67AB;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
      font: 500 1rem Inter, sans-sarif;
      color: var(---gray-500);
    @media(max-width: 1080px) {
      font-size: 93.75% ; //15px
    }
    @media(max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }
  body {
    background: var(--gray-50);
    color: var(--primary_04);
    -webkit-font-smoothing: antialiased;
  }
  button, input, textarea, body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    outline: none;
  }
  button:hover {
    opacity: 0.8;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    font-family: Nunito, sans-serif;
    color: var(--text);
  }
  h1 {
      font-size: 2rem;
  }
  h2{
      font-size: 1.5rem;
  }
  button {
    cursor: pointer;
  
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`