import styled, { css } from 'styled-components';
import Metal from "../../../assets/images/desktop/savage.svg";

export const TopFooterWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  background-image: url(${Metal});
  background-size: cover;
  background-position: center;

  @media (max-width: 480px) {
    padding-left: 1.5rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding-left: 24rem;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    padding-left: 34rem;
  }
  @media (min-width: 1201px) {
    padding-left: 32rem;
  }
`;

export const TopFooterBody = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 480px) {
    padding: .5rem;
    height: 60vh;
    width: 65vw;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 1rem;
    height: 70vh;
    width: 60vw;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding: 1.25rem;
    height: 55vh;
    width: 65vw;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 1.25rem;
    height: 65vh;
    width: 65vw; 
  }
  @media (min-width: 1201px) {
    padding-left: 12rem;
    height: 65vh;
    width: 60vw;
  }
`;

export const TopFooterBrow = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-bottom: .25rem;
  }
`;

export const TopFooterCounter = styled.h4``;

export const TopFooterCta = styled.div`
  margin-top: 1rem;
  width: 50vw;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: .25rem;
  }
`;

export const TopFooterButton = styled.button<{ size?: string; variant?: string }>`
  color: white;
  float: left;
  font-weight: 600;
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
  @media (max-width: 480px) {
    width: 45vw;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    border: 1.5px solid white;
    width: 30vw;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    border: 3px solid white;
    width: 20vw;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    border: 2px solid white;
    width: 20vw;
  }
  @media (min-width: 1201px) {
    width: 15vw;
  }
`;
