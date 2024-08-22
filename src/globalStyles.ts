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

// /* Global media query for small screens */
//   @media (max-width: 480px) {
//     body {
//       border: 2px solid blue;
//       font-size: 12px;
//       padding: 5px;
//     }

//     .container {
//       padding: 10px;
//       width: 100%;
//     }

//     /* Add more global styles here */
//   }

//   /* Existing media queries for larger screens */
//   @media (min-width: 768px) {
//     body {
//       font-size: 16px;
//       padding: 20px;
//     }
//   }

//   @media (min-width: 992px) {
//     body {
//       font-size: 18px;
//       padding: 30px;
//     }
//   }

//   @media (min-width: 1200px) {
//     body {
//       font-size: 20px;
//       padding: 40px;
//     }
//   }
// `;

export default GlobalStyle;
