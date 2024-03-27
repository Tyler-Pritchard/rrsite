import { HeroWrapper, HeroTitle } from "./hero.styles";
//import heroMobileImage from "../../images/mobile/image-hero.jpg";

const Hero = () => {
  return (
    // <HeroWrapper img={heroMobileImage}>
    <HeroWrapper>
      <HeroTitle className="wrapper">
        <h1>Immersive experiences that deliver</h1>
      </HeroTitle>
    </HeroWrapper>
  );
};
export default Hero;
