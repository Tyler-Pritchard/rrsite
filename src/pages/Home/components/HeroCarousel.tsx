import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store_index";
import {
  CarouselWrapper,
  Slide,
  ImageSlideBackground,
  VideoSlideWrapper,
  VideoFrame,
  Dots,
} from "./heroCarousel.styles";
import profilePhoto from "../../../assets/images/desktop/ProfilePhoto.webp";

// Add/reorder slides here. Drop in more `image` slides (e.g. sticker photos)
// whenever they're ready — no other code needs to change.
type SlideItem =
  | { id: string; type: "video"; youtubeId: string; title: string }
  | { id: string; type: "image"; src: string; alt: string };

const slides: SlideItem[] = [
  {
    id: "video-live",
    type: "video",
    youtubeId: "6HS4I6PTrxI",
    title: "Rob Rich — Live",
  },
  {
    id: "photo-profile",
    type: "image",
    src: profilePhoto,
    alt: "Rob Rich",
  },
];

// The video slide doesn't autoplay (no autoplay=1 in the embed URL below),
// so it's just a clickable thumbnail until someone presses play — nothing
// for auto-rotation to interrupt. Giving it a longer dwell time than a
// plain image just means more of a chance someone notices and clicks it.
const AUTO_ROTATE_MS = 8000;

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleSubmenu = useSelector((state: RootState) => state.menu.visibleSubmenu);
  const isSubmenuOpen = Boolean(visibleSubmenu);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselWrapper isSubmenuOpen={isSubmenuOpen}>
      {slides.map((slide, index) => (
        <Slide key={slide.id} isActive={index === currentSlide}>
          {slide.type === "video" ? (
            <VideoSlideWrapper>
              <VideoFrame>
                <iframe
                  src={`https://www.youtube.com/embed/${slide.youtubeId}?rel=0`}
                  title={slide.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoFrame>
            </VideoSlideWrapper>
          ) : (
            <ImageSlideBackground
              style={{ backgroundImage: `url(${slide.src})` }}
              role="img"
              aria-label={slide.alt}
            />
          )}
        </Slide>
      ))}
      <Dots>
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={index === currentSlide ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </Dots>
    </CarouselWrapper>
  );
};

export default HeroCarousel;
