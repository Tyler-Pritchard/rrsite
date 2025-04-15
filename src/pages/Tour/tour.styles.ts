import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const TourPageWrapper = styled.div`
  background-color: ${colors.backgroundBase};
  color: ${colors.textPrimary};
  min-height: 100vh;
  padding: 15rem 2rem 4rem 2rem;


  @media (max-width: 768px) {
    padding: 13rem 1.5rem 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 10rem 1rem 2rem 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-family: ${GlobalVariables.titleFont};
  font-size: ${GlobalVariables.fontSizeXXBig};
  color: ${colors.highlight};
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: ${GlobalVariables.fontSizeXBig};
  }

  @media (max-width: 480px) {
    font-size: ${GlobalVariables.fontSizeBig};
  }
`;

export const EventsGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
