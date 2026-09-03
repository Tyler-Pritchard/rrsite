import styled from "styled-components";
import { colors } from '../../../globalStyles';

export const CarouselWrapper = styled.div<{ isSubmenuOpen: boolean }>`
  position: relative; /* In normal page flow, not a fixed background layer */
  width: 100%;
  overflow: hidden;
  z-index: 1;

  /* The YouTube iframe's own GPU compositing layer doesn't reliably respect
     normal CSS stacking order (a documented iframe quirk, confirmed via
     Chrome's Layers panel) — no amount of z-index tuning fixes that
     reliably. Instead, whenever a nav submenu is open we make the hero
     fully transparent and non-interactive, so there's nothing left on
     that layer for the iframe to wrongly paint over the submenu. */
  opacity: ${(props) => (props.isSubmenuOpen ? 0 : 1)};
  pointer-events: ${(props) => (props.isSubmenuOpen ? "none" : "auto")};
  transition: opacity 0.15s ease;

  @media (max-width: 480px) {
    height: 45vh;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 55vh;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    height: 65vh;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    height: 70vh;
  }
  @media (min-width: 1201px) {
    height: 75vh;
  }
`;

export const Slide = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  pointer-events: ${(props) => (props.isActive ? "auto" : "none")};
`;

/* Used for plain image slides (background-image is set inline via style prop) */
export const ImageSlideBackground = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${colors.backgroundBase};
`;

/* Used for the video slide: a letterboxed, centered player rather than a
   cropped background, so the video is actually watchable/audible. */
export const VideoSlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundBase};
`;

export const VideoFrame = styled.div`
  position: relative;
  width: 90%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.5);
  border: 2px solid ${colors.highlight};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
      background-color: ${colors.highlight};
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`;
