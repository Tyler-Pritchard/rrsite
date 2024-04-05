import { HeroWrapper, HeroTitle } from "./hero.styles";
import { Container } from "@mui/material";


const Hero = () => {
  return (
    <Container style={HeroWrapper} maxWidth={'xl'} disableGutters={true}>
      <Container style={HeroTitle}>
        <h1>Rob Rich Official Website</h1>
      </Container>
    </Container>
  );
};
export default Hero;
