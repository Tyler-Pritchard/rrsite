import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const TipWrapper = styled.div`
  min-height: 100vh;
  background-color: ${colors.backgroundBase};
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem 3rem 1.5rem;
  text-align: center;

  @media (max-width: 480px) {
    padding-top: 10rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 12rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding-top: 14rem;
  }
  @media (min-width: 993px) {
    padding-top: 16rem;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
`;

export const Name = styled.h1`
  font-family: ${GlobalVariables.titleFont};
  font-size: ${GlobalVariables.fontSizeXBig};
  color: ${colors.highlight};
  margin-bottom: 0.5rem;
`;

export const Tagline = styled.p`
  font-size: ${GlobalVariables.fontSizeSmall};
  color: ${colors.textSecondary};
  max-width: 40ch;
  margin-bottom: 2.5rem;
`;

export const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 320px;
  margin-bottom: 2.5rem;
`;

export const PaymentButton = styled.a`
  display: block;
  background-color: ${colors.primaryGreen};
  color: ${colors.textPrimary};
  border: 2px solid ${colors.highlight};
  border-radius: 8px;
  padding: 1rem;
  font-size: ${GlobalVariables.fontSizeMedium};
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.highlight};
    color: ${colors.backgroundBase};
  }
`;

export const PaymentNote = styled.p`
  font-size: ${GlobalVariables.fontSizeXSmall};
  color: ${colors.textSecondary};
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h3`
  font-family: ${GlobalVariables.titleFont};
  font-size: ${GlobalVariables.fontSizeMedium};
  margin-bottom: 1rem;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  aspect-ratio: 16 / 9;
  margin-bottom: 2.5rem;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

export const SocialLink = styled.a`
  font-size: ${GlobalVariables.fontSizeSmall};
  color: ${colors.textPrimary};
  border-bottom: 2px solid ${colors.highlight};
  padding-bottom: 2px;

  &:hover {
    color: ${colors.highlight};
  }
`;