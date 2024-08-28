import styled, { css } from 'styled-components';

export const BottomFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: auto;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  padding-top: 3rem;

  @media (min-width: 481px) and (max-width: 768px) {
    width: 70vw;
  }
  @media (min-width: 992px) {
    width: 90vw;
  }
`;

/* TODO: SELECTOR CONTROLS BOTH BOTTOM FOOTER LINKS DIVIDERS AND DIVIDER SEPARATING FOOTER SECTIONS.  DIVIDERS LIKELY NEED TO BE REPLACED ANYWAYS */
export const BottomFooterDivider = styled.div<{ variant?: string; maxWidth?: string; orientation?: string; }>`
  display: none;
  
  @media (min-width: 768px) {
    height: 1rem;
    background-color: white;
    margin-bottom: 2rem;
    opacity: 0.6;
    border: 1px solid green;
  }
  
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
`;

export const BottomIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;

  (min-width: 481px) and (max-width: 768px) {
  
  }
  @media (min-width: 769px) and (max-width: 992px) {
    justify-content: center;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    width: 80vw;
    jusify-content: space-evenly;
  }
`;

export const BottomIconLink = styled.a``;

export const BottomIcons = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  color: white;

  @media (min-width: 768px) {
    margin: .5rem;
  }
`;

export const BottomLinksContainer = styled.div``;

export const FooterStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100vw;
  overflow: hidden;
  margin: 1.5rem 1.5rem;
  white-space: nowrap;
  
  @media (min-width: 992px) {
    width: 80vw;
    gap: 1rem;
    align-items: flex-end;
    justify-content: space-around;
    margin: .5rem 0rem;
  }
  @media (min-width: 1200px) {
    width: 90vw;
    gap: 0;
    justify-content: space-between;

    text-align: center;
  }
  @media (min-width: 1201px) {
    width: 50vw;
  }
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