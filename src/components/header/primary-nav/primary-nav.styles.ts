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
    
    @media (min-width: 1200px) {
        display: inline-block;
        position: relative;
        cursor: pointer;
        padding: 4.2rem 1rem;
    }
`;

export const NavLink = styled.a`
    @media (min-width: 1200px) {
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
    cursor: pointer;
    z-index: 9999;
    
    @media (max-width: 480px) {
        padding-top: 2rem;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        padding-top: 1.5rem;
    }
    @media (min-width: 769px) and (max-width: 992px) {
        padding-top: 1rem;
    }
`;

export const Logo = styled.img`
    @media (max-width: 480px) {
        height: 5.75rem;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        height: 7rem;
    }
    @media (min-width: 769px) and (max-width: 992px) {
        height: 8rem;
    }
    @media (min-width: 993px) and (max-width: 1200px) {
        height: 9.5rem;
    }
    @media (min-width: 1201px) {
        height: 9rem;
    }
`
export const LogoLink = styled.a``;
