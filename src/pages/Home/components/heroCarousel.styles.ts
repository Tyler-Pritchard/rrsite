import styled from "styled-components";
import { colors } from '../../../globalStyles';

export const CarouselWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: auto;
  height: 85vh;

  @media (max-width: 480px) {
    height: 60vh;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 65vh;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    height: 70vh;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    height: 75vh;
  }
  @media (min-width: 1201px) {
    height: 100vh;
  }
`;

export const Slide = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundBase};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  pointer-events: ${(props) => (props.isActive ? "auto" : "none")};
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.highlight};
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
  pointer-events: auto;

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