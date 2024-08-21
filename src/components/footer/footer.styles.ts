import styled, { css } from 'styled-components';

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
