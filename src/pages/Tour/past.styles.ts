import styled, { keyframes } from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

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

export const PastWrapper = styled.div`
  padding: 15rem 2rem 4rem 2rem;
  background-color: ${colors.backgroundBase};
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  min-height: 100vh;
  animation: ${fadeIn} 0.4s ease-out;

  @media (max-width: 768px) {
    padding: 10rem 1.5rem 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 8rem 1rem 2rem 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-family: ${GlobalVariables.titleFont};
  font-size: ${GlobalVariables.fontSizeXXBig};
  text-align: center;
  margin-bottom: 3rem;
  color: ${colors.highlight};

  @media (max-width: 768px) {
    font-size: ${GlobalVariables.fontSizeXBig};
  }
`;

export const PastEventTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

export const PastEventRow = styled.div`
  padding: 1.75rem 2rem;
  background-color: ${colors.primaryGreen};
  border-left: 5px solid ${colors.primaryYellow};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: ${colors.highlight};
    color: ${colors.backgroundBase};
    transform: translateY(-2px);
    box-shadow: 0 0 8px ${colors.highlight};
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 4px ${colors.highlight};
  }

  h4 {
    margin: 0;
    font-size: ${GlobalVariables.fontSizeMedium};
    font-weight: 600;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: ${GlobalVariables.fontSizeXSmall};
    color: ${colors.textSecondary};
  }
`;
