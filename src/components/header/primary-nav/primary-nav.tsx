import React from "react";
import Logo from "../../../assets/icons/logo4.png";
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { LogoStyle } from "./primary-nav.styles";

export default function PrimaryNav() {
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="md">
        <Toolbar>
          <Button color="inherit" href="#tour">Tour</Button>
          <Button color="inherit" href="#news">News</Button>
          <Button color="inherit" href="#band">Band</Button>
          <img src={Logo} alt="Logo" style={LogoStyle}/>
          <Button color="inherit" href="#music">Music</Button>
          <Button color="inherit" href="#media">Media</Button>
          <Button color="inherit" href="#fanclub">Fan Club</Button>
          <Button color="inherit" href="#shop">Shop</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
