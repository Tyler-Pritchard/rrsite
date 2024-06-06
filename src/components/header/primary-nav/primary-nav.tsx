import React from "react";
import Logo from "../../../assets/icons/logo4.png";
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { AppbarStyle, ToolbarStyle, ContainerStyle, ButtonStyle, LogoStyle } from "./primary-nav.styles";

export default function PrimaryNav() {
  return (
    <AppBar style={AppbarStyle}>
      <Container style={ContainerStyle}>
        <Toolbar style={ToolbarStyle}>
          <Button style={ButtonStyle} href="#tour">Tour</Button>
          <Button style={ButtonStyle} href="#news">News</Button>
          <Button style={ButtonStyle} href="#band">Band</Button>
          <img src={Logo} alt="Logo" style={LogoStyle}/>
          <Button style={ButtonStyle} href="#music">Music</Button>
          <Button style={ButtonStyle} href="#media">Media</Button>
          <Button style={ButtonStyle} href="#fanclub">Fan Club</Button>
          <Button style={ButtonStyle} href="#shop">Shop</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
