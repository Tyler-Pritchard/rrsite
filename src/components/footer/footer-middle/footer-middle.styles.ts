import styled from 'styled-components';

export const MiddleFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  height: auto;
  background-color: black;
`;

export const MiddleInner = styled.div``;

export const MiddleLogo = styled.img`
  width: 30%;
  
  @media (max-width: 480px) {
    width: 60%;
  }
  @media (max-width: 920px) {
    width: 70%;
  }
`;

export const MiddleMenu = styled.div``;
