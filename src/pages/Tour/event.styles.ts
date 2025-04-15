import styled, { keyframes } from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const EventPageWrapper = styled.div`
  padding: 16rem 2rem 4rem 2rem;
  background-color: ${colors.backgroundBase};
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  min-height: 100vh;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 10rem 1rem 2rem 1rem;
  }
`;

export const EventTitle = styled.h1`
  font-family: ${GlobalVariables.titleFont};
  font-size: ${GlobalVariables.fontSizeXXBig};
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: ${GlobalVariables.fontSizeXBig};
  }
`;

export const EventDate = styled.h2`
  font-size: ${GlobalVariables.fontSizeBig};
  text-align: center;
  color: ${colors.highlight};
  margin-bottom: 0.75rem;
`;

export const EventLocation = styled.h3`
  font-size: ${GlobalVariables.fontSizeMedium};
  text-align: center;
  color: ${colors.textSecondary};
  margin-bottom: 2.5rem;
`;

export const EventDescription = styled.p`
  max-width: 65ch;
  margin: 0 auto 3rem auto;
  font-size: ${GlobalVariables.fontSizeMedium};
  text-align: center;
  line-height: 1.7;
  color: ${colors.textSecondary};
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const EventButton = styled.button`
  background-color: ${colors.primaryGreen};
  color: ${colors.textPrimary};
  padding: 0.9rem 1.6rem;
  border: 2px solid ${colors.highlight};
  border-radius: 6px;
  font-size: ${GlobalVariables.fontSizeMedium};
  font-weight: 600;
  font-family: ${GlobalVariables.paragraphFont};
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover:enabled {
    background-color: ${colors.highlight};
    color: ${colors.backgroundBase};
  }

  &:disabled {
    background-color: ${colors.borderLight};
    color: ${colors.textSecondary};
    cursor: not-allowed;
  }
`;
