// rrsite/src/pages/Tour/tour.styles.ts

import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const TourPageWrapper = styled.div`
  padding: 8rem 2rem;
  background-color: ${colors.backgroundBase};
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  min-height: 100vh;
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-size: ${GlobalVariables.fontSizeXBig};
  margin-bottom: 4rem;
  color: ${colors.textPrimary};
`;

export const EventsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;
