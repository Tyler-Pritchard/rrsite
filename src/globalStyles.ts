import { createGlobalStyle } from "styled-components";

interface GlobalVariablesInterface {
  fontSizeBig: string;
  fontSizeSmall: string;
  fontSizeMedium: string;
  paragraphFont: string;
  titleFont: string;
}

const GlobalVariables: GlobalVariablesInterface = {
  fontSizeBig: "2.375rem",
  fontSizeSmall: "1.18rem",
  fontSizeMedium: "1.75rem",
  titleFont: "'Satisfy', cursive",
  paragraphFont: "'Satisfy', cursive"
};

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 15px;
    
    font-family: ${GlobalVariables.paragraphFont};
  }
  h1,h2 {
    font-weight: 1 00;
    text-transform:uppercase;
    font-family:${GlobalVariables.titleFont};
    font-size: ${GlobalVariables.fontSizeBig};
  }
  h3, .h3{
    text-transform: uppercase;
    font-family:${GlobalVariables.titleFont};
    font-size: ${GlobalVariables.fontSizeMedium};
  }
  .wrapper{
    margin: 0 6.2vw;

  }

  @media (max-width: 768px) { 
    body {
      font-size: 12px;
    }
    h1, h2 {
      font-size: 1.2rem;
    }
    h3, .h3 {
      font-size: 1.20rem;
    }
    .wrapper {
      margin: 0 1vw;
    }
  }
`;

export default GlobalStyle;
