import styled, { keyframes } from 'styled-components';
import { colors, GlobalVariables } from '../../../../globalStyles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 36rem;
  background-color: ${colors.primaryGreen};
  color: ${colors.textPrimary};
  border: 2px solid ${colors.borderLight};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;

  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 12px ${colors.highlight};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  padding: 2rem;
  font-family: ${GlobalVariables.paragraphFont};
`;

export const DateText = styled.div`
  font-size: ${GlobalVariables.fontSizeSmall};
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.highlight};
  margin-bottom: 0.5rem;
`;

export const LocationText = styled.div`
  font-size: ${GlobalVariables.fontSizeMedium};
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const VenueText = styled.div`
  font-size: ${GlobalVariables.fontSizeSmall};
  color: ${colors.textSecondary};
  margin-bottom: 1rem;
`;

export const Actions = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: ${colors.backgroundBase};
  color: ${colors.textPrimary};
  border: 2px solid ${colors.highlight};
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-size: ${GlobalVariables.fontSizeSmall};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.highlight};
    color: ${colors.backgroundBase};
  }

  &:focus {
    outline: 2px solid ${colors.highlight};
    outline-offset: 2px;
  }
`;

export const SoldOutText = styled.div`
  font-size: ${GlobalVariables.fontSizeSmall};
  font-weight: bold;
  color: red;
  text-transform: uppercase;
`;
