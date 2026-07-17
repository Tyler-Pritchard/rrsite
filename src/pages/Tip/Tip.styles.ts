// Tip.styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

  @media (max-width: 480px) { padding-top: 10rem; }
  @media (min-width: 481px) and (max-width: 768px) { padding-top: 12rem; }
  @media (min-width: 769px) and (max-width: 992px) { padding-top: 14rem; }
  @media (min-width: 993px) { padding-top: 16rem; }
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

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
  margin-bottom: 3rem;

  &:last-child { margin-bottom: 0; }
`;

export const SectionTitle = styled.h3`
  font-family: ${GlobalVariables.titleFont};
  font-size: ${GlobalVariables.fontSizeMedium};
  margin-bottom: 1rem;
`;

export const PaymentNote = styled.p`
  font-size: ${GlobalVariables.fontSizeXSmall};
  color: ${colors.textSecondary};
  margin-top: 0.75rem;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 1.5rem;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
  }
`;

export const RowList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const RowButton = styled.a<{ accent?: string }>`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: 100%;
  height: 3.4rem;
  background-color: ${colors.neutralDark};
  border: 1px solid ${colors.borderLight};
  border-left: 4px solid ${({ accent }) => accent || colors.borderLight};
  border-radius: 8px;
  padding: 0 1.2rem;
  font-size: ${GlobalVariables.fontSizeSmall};
  font-weight: 600;
  color: ${colors.textPrimary};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${colors.highlight};
  }
  &:visited {
    color: ${colors.textPrimary};
  }
`;

export const RowIcon = styled.img`
  height: 1.3rem;
  width: 1.3rem;
  flex-shrink: 0;
  object-fit: contain;
`;

export const TimelineCard = styled(Link)`
  display: block;
  width: 100%;
  background-color: ${colors.neutralDark};
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
  padding: 1.2rem 1.5rem;
  text-align: center;
  text-decoration: none;
  color: ${colors.textPrimary};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${colors.highlight};
  }
`;

export const TimelineCardTitle = styled.h3`
  font-family: ${GlobalVariables.titleFont};
  font-size: ${GlobalVariables.fontSizeSmall};
  color: ${colors.highlight};
  margin-bottom: 0.3rem;
`;

export const TimelineCardSubtitle = styled.p`
  font-size: ${GlobalVariables.fontSizeXSmall};
  color: ${colors.textSecondary};
`;