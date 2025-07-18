import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import arrowLeft from "@iconify-icons/mdi/chevron-left";
import arrowRight from "@iconify-icons/mdi/chevron-right";

export default function HeroCarousel({ prop, themeColors, styles, states }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const slideInterval = useRef(null);
  const isJumpingRef = useRef(false);
  const hasMountedRef = useRef(false);

  let carouselImages = states.carouselImages ?? {}

  const totalSlides = carouselImages.length;
  const fullSlides = [carouselImages[totalSlides - 1], ...carouselImages, carouselImages[0]];

  const goToIndex = (index) => {
    setCurrentIndex(index + 1);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const realIndex =
    currentIndex === 0
      ? totalSlides - 1
      : currentIndex === totalSlides + 1
        ? 0
        : currentIndex - 1;

  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, []);

  const startSlide = () => {
    stopSlide();
    slideInterval.current = setInterval(() => {
      if (!hasMountedRef.current) {
        hasMountedRef.current = true;
        return;
      }

      if (!isJumpingRef.current) {
        setCurrentIndex((prev) => prev - 1);
      }
    }, 5000);
  };

  const stopSlide = () => {
    clearInterval(slideInterval.current);
  };

  useEffect(() => {
    if (currentIndex === 0) {
      isJumpingRef.current = true;
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalSlides);
        isJumpingRef.current = false;
      }, 800);
    } else if (currentIndex === totalSlides + 1) {
      isJumpingRef.current = true;
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(1);
        isJumpingRef.current = false;
      }, 800);
    } else {
      setTransitionEnabled(true);
    }
  }, [currentIndex, totalSlides]);


  const getCarouselDotColor = (index) => {
    if (index === realIndex) {
      let color = "#fff";
      if (themeColors?.HeroCarouselDisplayedImageBackgroundColor) {
        color = themeColors?.HeroCarouselDisplayedImageBackgroundColor;
      } else if (styles?.HeroCarouselDisplayedImageBackgroundColor !== "") {
        color = styles?.HeroCarouselDisplayedImageBackgroundColor;
      }
      return color
    } else {
      let color = "rgba(255,255,255,0.5)";
      if (themeColors?.HeroCarouselNotDisplayedImageBackgroundColor) {
        color = themeColors?.HeroCarouselNotDisplayedImageBackgroundColor;
      } else if (styles?.HeroCarouselNotDisplayedImageBackgroundColor !== "") {
        color = styles?.HeroCarouselNotDisplayedImageBackgroundColor;
      }
      return color
    }
  };

  return (
    <Box
      onMouseEnter={stopSlide}
      onMouseLeave={startSlide}
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          display: "flex",
          transition: transitionEnabled ? "transform 0.8s ease-in-out" : "none",
          transform: `translateX(-${currentIndex * 100}%)`,
          width: "100%",
          height: "100%",
        }}
      >
        {fullSlides.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`slide-${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ))}
      </Box>

      <IconButton
        onClick={goToPrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          backgroundColor: themeColors?.HeroCarouselGoPrevBackgroundColor ? themeColors?.HeroCarouselGoPrevBackgroundColor : styles?.HeroCarouselGoPrevBackgroundColor != "" ? styles?.HeroCarouselGoPrevBackgroundColor : "rgba(0,0,0,0.5)",
          color: "#fff",
          zIndex: 2,
        }}
      >
        <Icon icon={arrowLeft} width={24} height={24} />
      </IconButton>

      <IconButton
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          backgroundColor: themeColors?.HeroCarouselGoNextBackgroundColor ? themeColors?.HeroCarouselGoNextBackgroundColor : styles?.HeroCarouselGoNextBackgroundColor != "" ? styles?.HeroCarouselGoNextBackgroundColor : "rgba(0,0,0,0.5)",
          color: "#fff",
          zIndex: 2,
        }}
      >
        <Icon icon={arrowRight} width={24} height={24} />
      </IconButton>

      <Box
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 2,
        }}
      >
        {carouselImages?.value?.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToIndex(index)}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: getCarouselDotColor(index),
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};