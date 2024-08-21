import styled from 'styled-components';

export const AppBar = styled.div`
    color: transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: absolute;
    align-items: center;
    border: .5rem groove #f7E581;
    justify-content: space-between;
    width: 100%;
    background-color:  #21b571;
    background-image: linear-gradient(180deg, #43724D 11%, #9ADBE0 61%, #f7E581 78%, #ffffff 95%);
    opacity: 97%;
    padding-left: 3rem;
    padding-right: 3rem;
    height: 10rem;

    @media (max-width: 480px) {
      position: relative;
      overflow: contain;
        border: 2px solid pink;
    }
`;

export const HeaderLeftContainer = styled.div`
  z-index: 9999;
`;

export const PrimaryNavContainer = styled.nav`
    overflow: visible;
    width: 100%;
    
    @media (max-width: 480px) {
        border: 2px solid red;
    }
`;

export const NavigationContainer = styled.div`
  z-index: 9999;
`;


// @media (max-width: 480px) {}
// @media (max-width: 768px) {}
// @media (max-width: 992px) {}
// @media (max-width: 1200px) {}
// @media (max-width: 1201px) {}