import styled, { css } from 'styled-components';

export const MiddleFooterWrapper = styled.div<{ maxWidth?: string; disableGutters?: boolean }>`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // width: 100%;
  // height: auto;
  // background-color: black;
  height: 23rem;
  background-color: rgb(0, 0, 0);

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}

  ${({ disableGutters }) =>
    disableGutters
      ? css`
          padding-left: 0;
          padding-right: 0;
        `
      : css`
          padding-left: 16px;  /* default gutter */
          padding-right: 16px; /* default gutter */
        `}
`;

export const MiddleInner = styled.div``;

export const MiddleLogo = styled.img`
  width: 30%;
`;

export const MiddleMenu = styled.div``;
