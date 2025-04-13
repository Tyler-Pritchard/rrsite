import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const PastWrapper = styled.div`
  padding: 8rem 2rem;
  background-color: ${colors.backgroundBase};
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  min-height: 100vh;
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-size: ${GlobalVariables.fontSizeXBig};
  margin-bottom: 3rem;
`;

export const PastEventTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const PastEventRow = styled.div`
  padding: 1.5rem 2rem;
  background-color: ${colors.surfaceLight};
  border-left: 4px solid ${colors.primaryYellow};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.highlight};
    color: ${colors.backgroundBase};
  }
`;