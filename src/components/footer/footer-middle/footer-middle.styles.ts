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
`;

export const MiddleInner = styled.div``;

export const MiddleLogo = styled.img`
  width: 50vw;
  
  @media (min-width: 992px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const MiddleMenu = styled.div``;
