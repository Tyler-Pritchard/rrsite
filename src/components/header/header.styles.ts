import styled from 'styled-components';

export const AppBar = styled.div`
  color: transparent;
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color:  #21b571;
  background-image: linear-gradient(180deg, #43724D 11%, #9ADBE0 61%, #f7E581 78%, #ffffff 95%);
  overflow: hidden;
  opacity: 96%;

  @media (max-width: 480px) {
    border: .3rem groove #f7E581;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    height: 8rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    border: .5rem groove #f7E581;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    height: 10rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    border: .5rem groove #f7E581;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    height: 12rem;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    border: .75rem groove #f7E581;
    padding-left: 4rem;
    padding-right: 4rem;
    height: 14rem;
  }
  @media (min-width: 1201px) {
    border: 1rem groove #f7E581;
    padding-left: 4rem;
    padding-right: 4rem;
    height: 14rem;
  }
`;

export const HeaderLeftContainer = styled.div`
  z-index: 9999;
`;

export const PrimaryNavContainer = styled.nav`
    overflow: visible;
    width: 100vw;
    
    @media (min-width: 1200px) {
      width: 50vw;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      padding: .11rem;
      justify-content: space-evenly;
    }
`;

export const NavigationContainer = styled.div`
  z-index: 9999;
`;
