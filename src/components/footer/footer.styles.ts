import styled, { css } from 'styled-components';
import Metal from "../../assets/images/desktop/savage.svg";


// Footer Wrapper
export const FooterWrapper = styled.footer<{ maxWidth?: string; disableGutters?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: black;

    ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
  
  ${({ disableGutters }) =>
    disableGutters &&
    css`
      padding-left: 0;
      padding-right: 0;
    `}
`;

// Footer Top Styles
export const TopFooterWrapper = styled.div`
  height: 30rem;
  width: 100%;
  background-image: url(${Metal});
  background-size: cover;
  background-position: center;
`;

export const TopFooterBody = styled.div`
  color: white;
  height: 10rem;
  width: 30rem;
  float: right;
  margin-top: 6rem;
`;

export const TopFooterBrow = styled.div`
  float: left;
`;

export const TopFooterCounter = styled.div`
  float: left;
`;

export const TopFooterCta = styled.div`
  float: left;
`;

export const TopFooterButton = styled.button`
  color: white;
  float: left;
  border: 2px solid white;
`;

// Footer Middle Styles
export const MiddleFooterWrapper = styled.div`
  height: 23rem;
  background-color: rgb(0, 0, 0);
`;

export const MiddleInner = styled.div``;

export const MiddleLogo = styled.div`
  width: 30%;
`;

export const MiddleMenu = styled.div``;

// Footer Bottom Styles
export const BottomFooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 15rem;
    background-color: rgb(0, 0, 0);
    padding-top: 4rem;
    border: '2px solid red';
`;

export const BottomFooterDivider = styled.div<{ variant?: string; maxWidth?: string; orientation?: string; flexItem?: boolean }>`
  width: 100%;
  height: 10px;
  background-color: white;
  margin-bottom: 1rem;
  opacity: 0.6;

  /* Handling variant */
  ${({ variant }) => variant === 'outlined' && css`
    border: 2px solid white;
    background-color: transparent;
  `}

  /* Handling maxWidth */
  ${({ maxWidth }) => maxWidth && css`
    max-width: ${maxWidth};
  `}

  /* Handling orientation */
  ${({ orientation }) => orientation === 'vertical' && css`
    width: 10px;
    height: 100%;
  `}
    /* Handling flexItem */
  ${({ flexItem }) => flexItem && css`
    flex: 1 1 auto; /* Example of making the element a flex item */
  `}
`;

export const BottomIconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: black;
  padding-left: 25%;
  padding-right: 25%;
`;

export const BottomIconLink = styled.a``;

export const BottomIcons = styled.div`
  width: 2rem;
  height: 2rem;
  color: white;
`;

export const BottomLinksContainer = styled.div<{ maxWidth?: boolean; disableGutters?: boolean }>`
  display: flex;
  // justify-content: center;
  // gap: 2rem;
  // flex-wrap: wrap;
  // flex-direction: row;
  // align-items: center;
  // padding-left: ${({ disableGutters }) => (disableGutters ? '0' : '1rem')};
  // padding-right: ${({ disableGutters }) => (disableGutters ? '0' : '1rem')};
  padding-left: 15%;
  padding-right: 15%;

    ${({ maxWidth }) =>
    maxWidth === false
      ? css`
          max-width: none;
        `
      : css`
          max-width: 80%;
        `}
`;

export const BottomFooterLinks = styled.a<{ disabled?: boolean }>`
  font-size: x-small;
  color: white;
  text-decoration: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; /* Prevent click if disabled */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)}; /* Dim the link if disabled */

  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')}; /* No hover effect if disabled */
  }
`;