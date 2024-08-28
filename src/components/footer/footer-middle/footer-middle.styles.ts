import styled from 'styled-components';

export const MiddleFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  padding: 1rem;
  overflow-x: hidden;
  height: auto;
  background-color: black;
    
  @media  (min-width: 481px) and (max-width: 768px) {
    justify-content: center;
    width: 90vw;
  }
  @media (min-width: 769px) and (max-width: 992px) {}
  @media (min-width: 993px) and (max-width: 1200px) {
    width: 100vw;
    justify-content: left;
    align-items: start;
  }
`;

export const MiddleInner = styled.div``;

export const MiddleLogo = styled.img`
  width: 50vw;

  @media (min-width: 481px) and (max-width: 768px){
    width: 60vw;
  }
`;

export const MiddleMenu = styled.div``;
