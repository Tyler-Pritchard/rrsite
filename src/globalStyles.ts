import { createGlobalStyle } from "styled-components";

export const colors = {
  primaryBlue: '#2F4F6F',
  primaryGreen: '#4C704B',
  primaryYellow: '#D2B048',
  primaryBeige: '#D4C7A3',
  accentSkyBlue: '#9ECBD9',
  accentCopperOrange: '#C88554', 
  neutralOffWhite: '#F5F3E6', 
  neutralDark: '#1A1A1A', 
};

interface GlobalVariablesInterface {
  fontSizeXXBig: string;
  fontSizeXBig: string;
  fontSizeBig: string;
  fontSizeSmall: string;
  fontSizeXSmall: string;
  fontSizeMedium: string;
  paragraphFont: string;
  titleFont: string;
}

const GlobalVariables: GlobalVariablesInterface = {
  fontSizeXXBig: "clamp(2.5rem, 5vw + 1rem, 3.5rem)",
  fontSizeXBig: "clamp(2rem, 4vw + 1rem, 2.75rem)",
  fontSizeBig: "clamp(1.75rem, 3vw + 1rem, 2.375rem)",
  fontSizeMedium: "clamp(1.75rem, 2vw + 1rem, 2.25rem)",
  fontSizeSmall: "clamp(1rem, 1.5vw + 1rem, 1.25rem)",
  fontSizeXSmall: "clamp(0.875rem, 1vw + 0.5rem, 1rem)",
  titleFont: "'Satisfy', cursive",
  paragraphFont: "'Satisfy', cursive"
};

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }
  html {
      //default rem value
      font-size: 62.5%; //1rem = 10px; 10px/16px = 62.5%

      @include respond(tab-land) {
          //width < 900?
          font-size: 56.25%; //1 rem 9px, 9/16 = 50%
      }

      @include respond(tab-port) {
          //width < 600?
          font-size: 50%; //1 rem = 8px, 8/16 = 50%
      }

      @include respond(big-desktop) {
          font-size: 75%; //1rem = 12, 12/16
      }
  }
  body {
    box-sizing: border-box;
    max-width: 100vw;
    overflow-x: hidden;
    font-family: ${GlobalVariables.paragraphFont};
    
    @include respond(tab-port) {
        padding: 0;
    }
  }
  a, button {
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
    button {
      font-size: ${GlobalVariables.fontSizeMedium};
    }
    h1,h2 {
      font-weight: 1 00;
      font-size: ${GlobalVariables.fontSizeBig};
    }
    h3, .h3{
      font-size: ${GlobalVariables.fontSizeMedium};
    }
    .wrapper{
      margin: 0 6.2vw;

    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    body {
      font-size: 12px;
    }
    button {
      font-size: ${GlobalVariables.fontSizeMedium};
    }
    h1,h2 {
      font-weight: 1 00;
      font-size: ${GlobalVariables.fontSizeXXBig};
    }
    h3, .h3{
      font-size: ${GlobalVariables.fontSizeMedium};
    }
    .wrapper{
      margin: 0 6.2vw;

    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    body {
      font-size: 22px;
    }
    button {
      font-size: ${GlobalVariables.fontSizeBig};
    }
    h1,h2 {
      font-weight: 1 00;
      font-size: ${GlobalVariables.fontSizeXBig};
    }
    h3, .h3{
      font-size: ${GlobalVariables.fontSizeBig};
    }
    .wrapper{
      margin: 0 8.2vw;
    }
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    body {
      font-size: 26px;
    }
    button {
      font-size: ${GlobalVariables.fontSizeBig};
    }
    h1,h2 {
      font-weight: 1 00;
      font-size: ${GlobalVariables.fontSizeXXBig};
    }
    h3, .h3{
      font-size: ${GlobalVariables.fontSizeXBig};
    }
    .wrapper{
      margin: 0 6.2vw;
    }
  }

  @media (min-width: 1201px) {
    body {
      font-size: 28px;
    }
    button, a {
      font-size: ${GlobalVariables.fontSizeBig};
    }
    h1,h2 {
      font-weight: 1 00;
      font-size: ${GlobalVariables.fontSizeXXBig};
    }
    h3, .h3{
      font-size: ${GlobalVariables.fontSizeXBig};
    }
    .wrapper{
      margin: 0 18.2vw;
    }
  }
`;

export default GlobalStyle;
