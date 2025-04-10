// rrsite/src/components/events/eventCard.styles.ts

import styled from 'styled-components';
import { colors, GlobalVariables } from '../../../../globalStyles';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.surfaceLight};
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  padding: 2rem;
  margin: 1.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 36rem;
  min-height: 22rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    flex: 1 1 30%;
  }

  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  margin-bottom: 2rem;
  line-height: 1.4;
`;

export const DateText = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const LocationText = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.25rem;
`;

export const VenueText = styled.p`
  font-size: 1.2rem;
  color: ${colors.textSecondary};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: ${colors.primaryGreen};
  color: ${colors.textPrimary};
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${GlobalVariables.paragraphFont};
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.highlight};
    color: ${colors.backgroundBase};
  }
`;

export const SoldOutText = styled.span`
  color: ${colors.textSecondary};
  font-size: 1rem;
  font-style: italic;
  padding: 0.75rem 1rem;
`;
