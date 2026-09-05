import React from "react";
import { HeroSpacer } from "./home.styles";
import HeroCarousel from "./components/HeroCarousel";

const Home: React.FC = () => {
  return (
    <>
      <HeroCarousel />
      <HeroSpacer />
      {/* <MainWrapper> */}
        {/* <MainTitle>Rob Rich, Warden of Wandering, PNW</MainTitle> */}
      {/* </MainWrapper> */}
    </>
  );
};

export default Home;
