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
  titleFont: "'Josefin Sans', sans-serif;",
  paragraphFont: "font-family: 'Alata', sans-serif;"
};

const GlobalStyle = createGlobalStyle`
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
`;

export default GlobalStyle;
