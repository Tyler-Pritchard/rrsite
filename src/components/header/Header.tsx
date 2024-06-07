import PrimaryNav from "./primary-nav/primary-nav";
import HeaderLeft from "./header-left/header-left";
import Navigation from "./navigation/navigation";
import { AppBar } from "@mui/material";
import { AppBarStyle } from "./header.styles";

const Header = () => {
  return (
    <AppBar style={AppBarStyle}>
      <HeaderLeft />
      <PrimaryNav />
      <Navigation />
    </AppBar>
  );
};
export default Header;
