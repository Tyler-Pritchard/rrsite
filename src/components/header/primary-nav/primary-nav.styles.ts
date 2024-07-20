import CSS from 'csstype';
import styled from 'styled-components';

export const NavItem = styled.li`
    display: inline-block;
    position: relative;
    padding: 10px 20px;
    cursor: pointer;
    z-index: 9999;
`;

export const NavLink = styled.a`
    color: #fff;
    position: relative;
    text-decoration: none;
    z-index: 9999;

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
}

export const ToolbarStyle: CSS.Properties = {}

export const ButtonStyle: CSS.Properties = {
    color: "white",
    zIndex: "9999"
}
    
export const LogoStyle: CSS.Properties = {
    height: "8.5rem"
}
