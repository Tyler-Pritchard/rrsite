import { createGlobalStyle } from "styled-components";

export const colors = {
  primaryBlue: '#2C2C2C',
  primaryGreen: '#1B3A30',
  primaryYellow: '#BFA75B',
  primaryBeige: '#D4C7A3',
  accentSkyBlue: '#9ECBD9',
  accentCopperOrange: '#B87333',
  neutralOffWhite: '#F2F2F2',
  neutralDark: '#121212',
  backgroundBase: '#121212',
  surfaceLight: '#F2F2F2',
  textPrimary: '#F2F2F2',
  textSecondary: '#CFCFCF',
  borderLight: '#444444',
  highlight: '#B87333',
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
  titleFont: "'Playfair Display', serif",
  paragraphFont: "'Inter', sans-serif"
};

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  *:focus-visible {
    outline: 2px dashed ${colors.highlight};
    outline-offset: 2px;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    box-sizing: border-box;
    max-width: 100vw;
    overflow-x: hidden;
    font-family: ${GlobalVariables.paragraphFont};
    background-color: ${colors.backgroundBase};
    color: ${colors.textPrimary};
  }

  a, button {
    font-family: ${GlobalVariables.paragraphFont};
  }

  h1, h2 {
    font-weight: 100;
    text-transform: uppercase;
    font-family: ${GlobalVariables.titleFont};
    font-size: ${GlobalVariables.fontSizeBig};
  }

  h3, .h3 {
    text-transform: uppercase;
    font-family: ${GlobalVariables.titleFont};
    font-size: ${GlobalVariables.fontSizeMedium};
  }

  .wrapper {
    margin: 0 6.2vw;
  }

  @media (max-width: 480px) {
    body { font-size: 10px; }
    button { font-size: ${GlobalVariables.fontSizeMedium}; }
    h1, h2 { font-size: ${GlobalVariables.fontSizeBig}; }
    h3, .h3 { font-size: ${GlobalVariables.fontSizeMedium}; }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    body { font-size: 12px; }
    button { font-size: ${GlobalVariables.fontSizeMedium}; }
    h1, h2 { font-size: ${GlobalVariables.fontSizeXXBig}; }
    h3, .h3 { font-size: ${GlobalVariables.fontSizeMedium}; }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    body { font-size: 22px; }
    button { font-size: ${GlobalVariables.fontSizeBig}; }
    h1, h2 { font-size: ${GlobalVariables.fontSizeXBig}; }
    h3, .h3 { font-size: ${GlobalVariables.fontSizeBig}; }
    .wrapper { margin: 0 8.2vw; }
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    body { font-size: 26px; }
    button { font-size: ${GlobalVariables.fontSizeBig}; }
    h1, h2 { font-size: ${GlobalVariables.fontSizeXXBig}; }
    h3, .h3 { font-size: ${GlobalVariables.fontSizeXBig}; }
  }

  @media (min-width: 1201px) {
    body { font-size: 28px; }
    button, a { font-size: ${GlobalVariables.fontSizeBig}; }
    h1, h2 { font-size: ${GlobalVariables.fontSizeXXBig}; }
    h3, .h3 { font-size: ${GlobalVariables.fontSizeXBig}; }
    .wrapper { margin: 0 18.2vw; }
  }
`;

export { GlobalVariables };
export default GlobalStyle;
