import styled from 'styled-components';

export const MiddleFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;
  height: auto;
  background-color: black;
  
  @media (max-width: 480px) {
    justify-content: center;
    padding: 1rem;
  }
  @media  (min-width: 481px) and (max-width: 768px) {
    justify-content: center;
    width: 90vw;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    justify-content: center;
    width: 90vw;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    width: 100vw;
    justify-content: left;
    align-items: start;
  }
`;

export const MiddleInner = styled.div``;

export const MiddleLogo = styled.img`
  width: 50vw;

  @media (max-width: 480px) {
    width: 95vw;
  }
  @media (min-width: 481px) and (max-width: 768px){
    width: 70vw;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 75vw;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    width: 40vw;
  }
  @media (min-width: 1201px) {
    width: 30vw;
  }
`;

export const MiddleMenu = styled.div``;
