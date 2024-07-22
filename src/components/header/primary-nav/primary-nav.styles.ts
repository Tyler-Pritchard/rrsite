import CSS from 'csstype';
import styled from 'styled-components';

export const NavItem = styled.li`
    display: inline-block;
    position: relative;
    padding: 10px 20px;
    cursor: pointer;
    z-index: 9999 !important;
`;

export const NavLink = styled.a`
    color: #fff;
    position: relative;
    text-decoration: none;
    display: inline !important;
    z-index: 9999 !important;

    &:hover {
        text-decoration: underline;
    }
`;

export const ContainerStyle: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    overflow: "visible",
    height: "10rem",
    zIndex: "9999"
}

export const ToolbarStyle: CSS.Properties = {
}

export const ButtonStyle: CSS.Properties = {
    color: "white",
    zIndex: "9999",
}
    
export const LogoStyle: CSS.Properties = {
    height: "7.5rem"
}