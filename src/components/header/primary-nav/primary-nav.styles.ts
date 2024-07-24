import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: visible;
    height: 10rem;
`;

export const NavItem = styled.li`
    display: inline-block;
    position: relative;
    padding: 10px 20px;
    cursor: pointer;
    padding-top: 4rem;
    @media (max-width: 480px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: #fff;
    position: relative;
    text-decoration: none;
    display: inline;
    z-index: 9999;

    &:hover {
        text-decoration: underline;
    }
`;

 
export const LogoItem = styled.li`
    display: inline-block;
    position: relative;
    padding: 10px 20px;
    cursor: pointer;
    padding-top: 1rem;
    z-index: 9999;
`;

export const Logo = styled.img`
    height: 7.5rem;
    display: inline-block;

    @media (max-width: 480px) {
        margin-top: 1rem;
        height: 6rem;
        display: inline-block;
    }
`
export const LogoLink = styled.a`
    color: #fff;
    display: inline;

    &:hover {
        text-decoration: underline;
    }
`;
