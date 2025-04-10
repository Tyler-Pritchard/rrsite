import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const EventPageWrapper = styled.div`
  padding: 8rem 2rem;
  background-color: ${colors.backgroundBase};
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  min-height: 100vh;
`;

export const EventTitle = styled.h1`
  text-align: center;
  font-size: ${GlobalVariables.fontSizeXBig};
  margin-bottom: 2rem;
`;

export const EventDate = styled.h2`
  text-align: center;
  font-size: ${GlobalVariables.fontSizeMedium};
  margin-bottom: 1rem;
`;

export const EventLocation = styled.h3`
  text-align: center;
  font-size: ${GlobalVariables.fontSizeSmall};
  color: ${colors.textSecondary};
  margin-bottom: 3rem;
`;

export const EventDescription = styled.p`
  max-width: 60rem;
  margin: 0 auto 3rem auto;
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.6;
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
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${GlobalVariables.paragraphFont};
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

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
