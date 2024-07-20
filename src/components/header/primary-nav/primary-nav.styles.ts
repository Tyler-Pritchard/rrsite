import CSS from 'csstype';
import styled from 'styled-components';

//-----------PRIMARY-NAV.TSX------------//
export const ContainerStyle: CSS.Properties = {
    maxWidth: "md",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    overflow: "visible",
    height: "10rem",
    border: "1px solid red"
}

export const ToolbarStyle: CSS.Properties = {
    border: "1px solid orange",
}

export const ButtonStyle: CSS.Properties = {
    color: "white",
    zIndex: "9999"
}

export const LogoStyle: CSS.Properties = {
    height: "9rem"
}


export const NavItem = styled.li`
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


//-----------SUBMENU.TSX-------------//

export const SubmenuWrapper = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.9);
  color: #fff;
  padding: 10px;
  width: 100%;
  height: 20rem;
  border: 2px solid blue;
`;

export const SubmenuItems = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
    border: 1px solid yellow;
`
    
    export const SubmenuItem = styled.li`
    list-style: none;
    display: flex;
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    border: 1px solid green;
`;

export const SubmenuLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;