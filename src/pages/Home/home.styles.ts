import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const HeroSpacer = styled.div`
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  @media (max-width: 480px) {
    height: 45vh;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 50vh;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    height: 55vh;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    height: 60vh;
  }
  @media (min-width: 1201px) {
    height: 100vh;
  }
`;

export const MainTitle = styled.h1`
  color: ${colors.primaryGreen};
  background-color: ${colors.primaryBeige};
  font-family: ${GlobalVariables.titleFont};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 95%;

  @media (max-width: 480px) {
    width: 75vw;
    height: 30vh;
    border: .75rem double ${colors.highlight};
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 95vw;
    height: 55vh;
    border: 2rem double ${colors.highlight};
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 90vw;
    height: 50vh;
    border: 3rem double ${colors.highlight};
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    width: 80vw;
    height: 40vh;
    border: 3.5rem double ${colors.highlight};
  }
  @media (min-width: 1201px) {
    width: 80vw;
    height: 80vh;
    border: 3.5rem double ${colors.highlight};
  }
`;
