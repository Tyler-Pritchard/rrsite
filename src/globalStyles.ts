import { createGlobalStyle } from "styled-components";

interface GlobalVariablesInterface {
  fontSizeXBig: string;
  fontSizeBig: string;
  fontSizeSmall: string;
  fontSizeXSmall: string;
  fontSizeMedium: string;
  paragraphFont: string;
  titleFont: string;
}

const GlobalVariables: GlobalVariablesInterface = {
  fontSizeXBig: "2.6rem",
  fontSizeBig: "2.375rem",
  fontSizeSmall: "1.18rem",
  fontSizeXSmall: "1.00rem",
  fontSizeMedium: "1.75rem",
  titleFont: "'Satisfy', cursive",
  paragraphFont: "'Satisfy', cursive"
};

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 15px;
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0 auto;
    padding: 0;
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

  @media (max-width: 480px) {
    body {
      font-size: 10px;
    }
    h1,h2 {
      font-size: ${GlobalVariables.fontSizeSmall};
    }
    h3, .h3{
      font-size: ${GlobalVariables.fontSizeXSmall};
    }
  }

  @media (max-width: 768px) {
    body {
      font-size: 16px;
    }
    h1,h2 {
      font-size: ${GlobalVariables.fontSizeXBig};
    }
    h3, .h3{
      font-size: ${GlobalVariables.fontSizeBig};
    }
  }
    
  @media (max-width: 992px) {
    body {
      font-size: 18px;
    }
  }
  @media (max-width: 1200px) {
    body {
      font-size: 20px;
    }
  }
  @media (max-width: 1201px) {
    body {
      font-size: 24px;
    }
  }
`;

export default GlobalStyle;
