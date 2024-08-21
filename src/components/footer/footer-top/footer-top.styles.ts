import styled, { css } from 'styled-components';
import Metal from "../../../assets/images/desktop/savage.svg";

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

export const TopFooterCounter = styled.h4`
  float: left;
`;

export const TopFooterCta = styled.div`
  float: left;
`;

export const TopFooterButton = styled.button<{ size?: string; variant?: string }>`
  color: white;
  float: left;
  border: 2px solid white;

  /* Handling size */
  ${({ size }) => size === 'large' && `
    padding: 12px 24px; 
    font-size: 1.25rem;
    border-radius: 8px;
  `}

  /* Handling variant */
  ${({ variant }) => variant === 'outlined' && css`
    background-color: transparent;
    border: 2px solid white;
    color: white;
  `}

  ${({ variant }) => variant === 'contained' && css`
    background-color: white;
    border: none;
    color: black;
  `}
`;
