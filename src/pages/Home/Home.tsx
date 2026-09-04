import React from "react";
import { MainTitle, HeroSpacer } from "./home.styles";
import HeroCarousel from "./components/HeroCarousel";

const Home: React.FC = () => {
  return (
    <>
      <HeroCarousel />
      <HeroSpacer />
      {/* <MainWrapper> */}
        {/* <MainTitle>Rob Rich, PNW Dilettante</MainTitle> */}
      {/* </MainWrapper> */}
    </>
  );
};

export default Home;
