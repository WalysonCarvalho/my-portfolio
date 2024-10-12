import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body,html {
    background-color: ${({ isNight }) => (isNight ? "#05003c" : "white")};
    color: ${({ isNight }) => (isNight ? "white" : "black")};
    transition: background-color 0.3s ease;
    border: none;
    
  overflow-x: hidden;

  * {
  box-sizing: border-box;
}


  }
`;

export default GlobalStyles;
