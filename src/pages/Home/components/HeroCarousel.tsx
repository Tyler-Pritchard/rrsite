import React, { useState, useEffect } from "react";
import { CarouselWrapper, Slide, Dots } from "./heroCarousel.styles";
import image1 from "../../../assets/images/desktop/StandingGuitar.avif";
import image2 from "../../../assets/images/desktop/TacomaCrows.avif";
import image3 from "../../../assets/images/desktop/LandingArena.avif";

const images = [image1, image2, image3];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselWrapper>
      {images.map((img, index) => (
        <Slide
          key={index}
          isActive={index === currentSlide}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <Dots>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </Dots>
    </CarouselWrapper>
  );
};

export default HeroCarousel;
