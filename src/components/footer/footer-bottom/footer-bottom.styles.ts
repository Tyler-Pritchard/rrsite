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

  @media (min-width: 768px) {
    overflow: hidden;
  }
`;

export const BottomFooterDivider = styled.div<{ variant?: string; maxWidth?: string; orientation?: string; }>`
  display: none;
  
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

  @media (min-width: 992px) {
    width: 100vw;
    display: flex;
    height: .15rem;
    background-color: white;
    margin-bottom: 2rem;
    opacity: 0.6;
  }
`;

export const BottomIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;

  @media (min-width: 768px) {
    width: 50vw;
    padding-bottom: 2rem;
    justify-content: center;
  }
  @media (min-width: 992px) {
    width: 50vw;
    jusify-content: space-evenly;
  }
  @media (min-width: 1200px) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

export const BottomIconLink = styled.a``;

export const BottomIcons = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  color: white;

  @media (min-width: 1200px) {
    height: 2.25rem;
    width: 2.25rem;
  }
`;

export const BottomLinksContainer = styled.div`
  
  @media (min-width: 1200px) {
    gap: .5rem;
  }
`;

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
    flex-wrap: wrap;
    max-width: 50vw;
    gap: 1rem;
    align-items: flex-end;
    justify-content: space-around;
  }
  @media (min-width: 1200px) {
    width: 90vw;
    gap: 0;
    justify-content: space-between;

    text-align: center;
  }
  @media (min-width: 1201px) {
    width: 50vw;
    border: 3px solid orangered;
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