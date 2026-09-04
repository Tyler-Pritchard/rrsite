import React from "react";
import { MainWrapper, MainTitle, HeroSpacer } from "./home.styles";
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
