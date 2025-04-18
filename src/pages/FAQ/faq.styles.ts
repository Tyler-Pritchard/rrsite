import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const FAQContainer = styled.div`
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};
  background-color: ${colors.backgroundBase};

  @media (max-width: 480px) {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 9rem 1rem 1rem 1.5rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 12rem 2rem 2rem 2rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 14rem 2rem 2rem 2rem;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 16rem 2rem 2rem 2rem;
  }
  @media (min-width: 1201px) {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 16rem 2rem 2rem 2rem;
  }
`;

export const SectionTitle = styled.h2<{ expanded: boolean }>`
  font-size: 1.5rem;
  font-family: ${GlobalVariables.paragraphFont};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${colors.neutralDark};
  margin-bottom: 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.borderLight};
  }
`;

export const DropdownIcon = styled.span<{ expanded: boolean }>`
  transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const Question = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};
`;

export const Answer = styled.p`
  font-size: 1rem;
  margin: 5px 0 20px 0;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textSecondary};
`;

export const ShowMoreButton = styled.button`
  font-size: 1rem;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  font-family: ${GlobalVariables.paragraphFont};
  background-color: transparent;
  border: 1px solid ${colors.textPrimary};
  border-radius: 5px;
  color: ${colors.textPrimary};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.textPrimary};
    color: ${colors.backgroundBase};
    border-color: ${colors.backgroundBase};
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
