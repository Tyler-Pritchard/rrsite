import styled, { css } from 'styled-components';
import Metal from "../../../assets/images/desktop/savage.svg";

export const TopFooterWrapper = styled.div`
  height: 30rem;
  width: 100vw;
  overflow: hidden;
  background-image: url(${Metal});
  background-size: cover;
  background-position: center;
  padding-left: 2rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
  }
`;

export const TopFooterBody = styled.div`
  color: white;
  height: 70vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1200px) {
    margin-top: 10rem;
  }
`;

export const TopFooterBrow = styled.div`
  margin-bottom: 1rem;
`;

export const TopFooterCounter = styled.h4``;

export const TopFooterCta = styled.div`
  margin-top: 1rem;
  width: 50vw;
`;

export const TopFooterButton = styled.button<{ size?: string; variant?: string }>`
  color: white;
  float: left;
  width: 50vw;
  border: 2px solid white;

  /* Handling size */
  ${({ size }) => size === 'large' && `
    padding: 8px 16px; 
    font-size: 1rem;
  `}

  /* Handling variant */
  ${({ variant }) => variant === 'outlined' && css`
    background-color: transparent;
    border: 1px solid white;
    color: white;
  `}

  ${({ variant }) => variant === 'contained' && css`
    background-color: white;
    border: none;
    color: black;
  `}
`;
