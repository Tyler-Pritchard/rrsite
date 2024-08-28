import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: visible;
    height: 10rem;
`;

export const NavItem = styled.li`
    display: none;
    
    @media (min-width: 992px) {
        display: inline-block;
        position: relative;
        cursor: pointer;
        padding: 4.2rem 2rem;
    }
    @media (min-width: 1200px) {
        padding: 4.2rem 1rem;
    }
`;

export const NavLink = styled.a`
    @media (min-width: 992px) {
        color: #fff;
        position: relative;
        text-decoration: none;
        display: inline;
        z-index: 9999;
    
        &:hover {
            text-decoration: underline;
        }
    }
`;

 
export const LogoItem = styled.li`
    display: inline-block;
    position: relative;
    padding-top: 1.6rem;
    cursor: pointer;
    z-index: 9999;
`;

export const Logo = styled.img`
    height: 6.5rem;
`
export const LogoLink = styled.a``;
