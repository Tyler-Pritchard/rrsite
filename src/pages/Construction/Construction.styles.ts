import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const ConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${colors.backgroundBase};
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};

  @media (max-width: 480px) {
    height: 45rem;
    padding: 0.5rem;
    padding-top: 3rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 60rem;
    padding: 1rem;
    padding-top: 10rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    height: 70rem;
    padding: 1.5rem;
    padding-top: 10rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    height: 80rem;
    padding: 2rem;
    padding-top: 16rem;
  }

  @media (min-width: 1201px) {
    height: 75rem;
    padding: 3.5rem;
    padding-top: 38rem;
  }
`;

export const ContentContainer = styled.div``;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Message = styled.h1`
  font-size: 2rem;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};
`;
