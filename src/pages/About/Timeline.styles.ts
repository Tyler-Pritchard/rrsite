import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

/**
 * TimelineContainer is a responsive container for embedding the Knight Lab timeline.
 * It centers the iframe horizontally and vertically and adjusts its height and padding 
 * across various screen sizes for optimal viewing.
 */
export const TimelineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};
  background-color: ${colors.backgroundBase};

  iframe {
    width: 100%;
    height: 95%;
    border: none;
  }

  /* Mobile: Small screens (up to 480px wide) */
  @media (max-width: 480px) {
    height: 98rem;
    padding: 0.25rem;
    top: 7rem;
  }

  /* Tablet: Small tablets and larger phones (481px to 768px) */
  @media (min-width: 481px) and (max-width: 768px) {
    height: 95rem;
    padding: 1rem;
    top: 9rem;
  }

  /* Medium screens: tablets in landscape (769px to 992px) */
  @media (min-width: 769px) and (max-width: 992px) {
    height: 90rem;
    padding: 1.5rem;
    top: 10rem;
  }

  /* Large screens: smaller desktops (993px to 1200px) */
  @media (min-width: 993px) and (max-width: 1200px) {
    height: 90rem;
    padding: 2rem;
    top: 12rem;
  }

  /* Extra-large screens (1201px and up) */
  @media (min-width: 1201px) {
    height: 95rem;
    padding: 1.5rem;
    top: 10rem;
    padding-top: 1rem;
  }
`;
