import styled, { css } from 'styled-components';

export const BottomFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: spece-evenly;
    height: 15rem;
    width: 100vw;
    background-color: rgb(0, 0, 0);
    padding-top: 3rem;
`;

export const BottomFooterDivider = styled.div<{ variant?: string; maxWidth?: string; orientation?: string; }>`
  width: 100vw;
  display: flex;
  height: .15rem;
  background-color: white;
  margin-bottom: 2rem;
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
`;

export const BottomIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100vw;
  background-color: black;
  padding-bottom: 2rem;
`;

export const BottomIconLink = styled.a``;

export const BottomIcons = styled.img`
  width: 2rem;
  height: 2rem;
  color: white;
`;

export const BottomLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

export const FooterStack = styled.div<{ direction?: string; spacing?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ spacing }) => spacing || '1rem'};
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  overflow-x: hidden;
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