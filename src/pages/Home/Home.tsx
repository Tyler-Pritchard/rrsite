import React from "react";
import { MainWrapper, Tagline } from "./home.styles";
import HeroCarousel from "./components/HeroCarousel";

const Home: React.FC = () => {
  return (
    <MainWrapper>
      <HeroCarousel />
      <Tagline>Rob Rich Official</Tagline>
    </MainWrapper>
  );
};

export default Home;
