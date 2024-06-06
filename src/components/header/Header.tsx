import PrimaryNav from "./primary-nav/primary-nav";
import HeaderLeft from "./header-left/header-left";
import Navigation from "./navigation/navigation";
import { Container } from "@mui/material";
import { ContainerStyle } from "./header.styles";

const Header = () => {
  return (
    <Container style={ContainerStyle}>
      <HeaderLeft />
      <PrimaryNav />
      <Navigation />
    </Container>
  );
};
export default Header;
