import styled from 'styled-components';
import { colors, GlobalVariables } from '../../../../globalStyles';

export const CardWrapper = styled.div`
  background-color: ${colors.surfaceLight};
  color: ${colors.backgroundBase};
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-top: 4rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  &:hover {
    background-color: ${colors.highlight};
    transform: translateY(-3px);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-family: ${GlobalVariables.titleFont};
  font-size: ${GlobalVariables.fontSizeMedium};
  margin-bottom: 1.5rem;
`;

export const CardButton = styled.button`
  font-family: ${GlobalVariables.paragraphFont};
  background-color: ${colors.primaryGreen};
  color: ${colors.textPrimary};
  padding: 0.75rem 1.75rem;
  border: none;
  border-radius: 4px;
  font-size: ${GlobalVariables.fontSizeSmall};
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.primaryYellow};
    color: ${colors.backgroundBase};
    border: 1px solid ${colors.neutralDark};
  }
`;
