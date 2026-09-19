import styled from "styled-components";
import { colors, GlobalVariables } from '../../../globalStyles';

export const SightingsSection = styled.section`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
  padding: 0 2rem;
`;

export const SightingsTitle = styled.h2`
  color: ${colors.textPrimary};
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const SightingsSubtitle = styled.p`
  font-family: ${GlobalVariables.paragraphFont};
  font-size: ${GlobalVariables.fontSizeXSmall};
  color: ${colors.textSecondary};
  text-align: center;
  max-width: 60ch;
  margin-bottom: 2.5rem;
`;

export const MapFrame = styled.div`
  width: 100%;
  height: 45rem;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${colors.borderLight};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 0;

  .leaflet-container {
    width: 100%;
    height: 100%;
    background-color: ${colors.neutralDark};
    font-family: ${GlobalVariables.paragraphFont};
  }

  .leaflet-popup-content-wrapper {
    background-color: ${colors.surfaceLight};
    color: ${colors.backgroundBase};
    border-radius: 8px;
  }

  .leaflet-popup-tip {
    background-color: ${colors.surfaceLight};
  }

  @media (max-width: 480px) {
    height: 32rem;
  }
`;

export const PopupTitle = styled.h3`
  font-family: ${GlobalVariables.titleFont};
  font-size: ${GlobalVariables.fontSizeXSmall};
  margin-bottom: 0.4rem;
`;

export const PopupMeta = styled.p`
  font-family: ${GlobalVariables.paragraphFont};
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
`;