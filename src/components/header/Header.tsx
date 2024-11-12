import React from 'react';
import PrimaryNav from "./primary-nav/primary-nav";
import HeaderLeft from "./header-left/header-left";
import Navigation from "./navigation/navigation";
import { AppBar,  HeaderLeftContainer, PrimaryNavContainer, NavigationContainer } from "./header.styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <AppBar>
      <HeaderLeftContainer>
          <HeaderLeft />
      </HeaderLeftContainer>
      <PrimaryNavContainer>
          <PrimaryNav />
      </PrimaryNavContainer>
      <NavigationContainer>
          <Navigation />
      </NavigationContainer>
    </AppBar>
  );
};
export default Header;
