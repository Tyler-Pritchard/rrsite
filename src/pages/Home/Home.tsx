import React from "react";
import { HeroSpacer, MainWrapper } from "./home.styles";
import HeroCarousel from "./components/HeroCarousel";
import SightingsMap from "./components/SightingsMap";

const Home: React.FC = () => {
  return (
    <>
      <HeroCarousel />
      <HeroSpacer />
      <MainWrapper>
        {/* <MainTitle>Rob Rich. Maker & Musician.</MainTitle> */}
        <SightingsMap />
      </MainWrapper>
    </>
  );
};

export default Home;
