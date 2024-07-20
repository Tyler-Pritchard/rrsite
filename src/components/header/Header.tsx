import React from 'react';
import PrimaryNav from "./primary-nav/primary-nav";
import HeaderLeft from "./header-left/header-left";
import Navigation from "./navigation/navigation";
import { AppBar } from "@mui/material";
import { AppBarStyle,  HeaderLeftStyle, PrimaryNavStyle, NavigationStyle } from "./header.styles";

const Header = () => {
  return (
    <AppBar style={AppBarStyle} color="transparent">
        <div style={HeaderLeftStyle} >
          <HeaderLeft />
        </div>
        <div style={PrimaryNavStyle}>
          <PrimaryNav />
        </div>
        <div style={NavigationStyle}>
          <Navigation />
        </div>
    </AppBar>
  );
};
export default Header;
