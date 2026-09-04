import React, { useState, useEffect } from "react";
import { CarouselWrapper, Slide, Dots, PlayButton } from "./heroCarousel.styles";
import image1 from "../../../assets/images/desktop/RR_ProfilePic.webp";

type SlideItem =
  | { type: "image"; src: string }
  | { type: "video"; youtubeId: string };

const slides: SlideItem[] = [
  { type: "video", youtubeId: "6HS4I6PTrxI" },
  { type: "image", src: image1 },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselWrapper>
      {slides.map((slide, index) => {
        if (slide.type === "video") {
          return (
            <Slide
              key={index}
              isActive={index === currentSlide}
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${slide.youtubeId}/maxresdefault.jpg)`,
              }}
            >
              <a
                href={`https://youtu.be/${slide.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "absolute", inset: 0 }}
              >
                <PlayButton as="span">▶</PlayButton>
              </a>
            </Slide>
          );
        }

        return (
          <Slide
            key={index}
            isActive={index === currentSlide}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        );
      })}
      <Dots>
        {slides.map((_, index) => (
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