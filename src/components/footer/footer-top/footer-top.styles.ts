import styled, { css } from 'styled-components';
import Metal from "../../../assets/images/desktop/savage.svg";

export const TopFooterWrapper = styled.div`
  height: 30rem;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  background-image: url(${Metal});
  background-size: cover;
  background-position: center;

  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding: 1rem;
  }
`;

export const TopFooterBody = styled.div`
  color: white;
  height: 10rem;
  width: 30rem;
  float: right;
  margin-top: 6rem;

  @media (max-width: 480px) {
    justify-content: space-evenly;
    align-items: end;
    padding: 1rem;
    width: 95vw;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
    height: auto;
  }
  @media (max-width: 1200px) {
    margin-top: 10rem;
  }
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
