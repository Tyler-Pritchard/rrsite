import React from "react";
import { MainWrapper, MainTitle } from "./home.styles";
import HeroCarousel from "./components/HeroCarousel";

const Home: React.FC = () => {
  return (
    <MainWrapper>
      <HeroCarousel />
      <MainTitle>Rob Rich Official Website</MainTitle>
    </MainWrapper>
  );
};

export default Home;
