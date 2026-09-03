import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const MainWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Just clears the fixed header nav now — the hero is in normal flow,
     not a full-viewport fixed background, so no more huge padding hacks. */
  @media (max-width: 480px) {
    padding-top: 6rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 9rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding-top: 10rem;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    padding-top: 12rem;
  }
  @media (min-width: 1201px) {
    padding-top: 10rem;
  }
`;

export const Tagline = styled.p`
  font-family: ${GlobalVariables.titleFont};
  color: ${colors.highlight};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.15rem;
  font-size: ${GlobalVariables.fontSizeSmall};
  margin-top: 2rem;
  padding: 0 1.5rem;
`;
