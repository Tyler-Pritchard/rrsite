import PrimaryNav from "./primary-nav/primary-nav";
import HeaderLeft from "./header-left/header-left";
import { Container } from "@mui/material";
import { ContainerStyle } from "./header.styles";

const Header = () => {
  return (
    <Container style={ContainerStyle}>
      <HeaderLeft />
      <PrimaryNav />
    </Container>
  );
};
export default Header;
