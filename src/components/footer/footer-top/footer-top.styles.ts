import styled from 'styled-components';
import { colors, GlobalVariables } from '../../../globalStyles';
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
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 0.5rem;
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
    margin-bottom: 0.25rem;
  }
`;

export const TopFooterCounter = styled.h4`
  font-family: ${GlobalVariables.titleFont};
  color: ${colors.primaryYellow};
  font-size: ${GlobalVariables.fontSizeMedium};
  margin-bottom: 0.5rem;
`;

export const TopFooterCta = styled.div`
  margin-top: 1rem;
  width: 50vw;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 0.25rem;
  }
`;

export const TopFooterButton = styled.button`
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  font-weight: 600;
  width: 50vw;
  border: 2px solid ${colors.textPrimary};
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.surfaceLight};
    color: ${colors.backgroundBase};
    box-shadow: inset 0px 0px 5px ${colors.borderLight};
    border: 2px solid ${colors.backgroundBase};
  }

  @media (max-width: 480px) {
    width: 45vw;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    border: 1.5px solid ${colors.textPrimary};
    width: 30vw;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    border: 3px solid ${colors.textPrimary};
    width: 20vw;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    border: 2px solid ${colors.textPrimary};
    width: 20vw;
  }
  @media (min-width: 1201px) {
    width: 15vw;
    padding: 0.75rem 0.25rem;
  }
`;

export const TopFooterLink = styled.a`
  font-family: ${GlobalVariables.paragraphFont};
  text-decoration: none;
  color: inherit;
`;
