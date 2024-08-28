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
    
  @media (min-width: 768px) {
    justify-content: center;
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 100vw;
    justify-content: left;
    align-items: start;
  }
`;

export const MiddleInner = styled.div``;

export const MiddleLogo = styled.img`
  width: 50vw;

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const MiddleMenu = styled.div``;
