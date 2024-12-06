import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: fixed; /* Ensures the carousel stays in the background */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Keeps it behind other content */
`;

export const Slide = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    &.active {
      background-color: white;
    }
  }
`;
