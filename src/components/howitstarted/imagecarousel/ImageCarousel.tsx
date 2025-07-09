"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../../styles/howitstarted/ImageCarousel.module.css";

const IMAGES = [
  "/images/personas2.png",
  "/images/personas2.png",
  "/images/personas2.png",
  "/images/personas3.png",
  "/images/personas3.png",
  "/images/personas3.png",
  "/images/persona.png",
  "/images/persona.png",
  "/images/persona.png",
];

const IMAGES_PER_SLIDE = 3;
const AUTOPLAY_DELAY = 5000;

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(IMAGES.length / IMAGES_PER_SLIDE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentImages = () => {
    const start = currentIndex * IMAGES_PER_SLIDE;
    return IMAGES.slice(start, start + IMAGES_PER_SLIDE);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {getCurrentImages().map((src, index) => (
          <div key={index} className={styles.carouselImageWrapper}>
            <Image
              src={src}
              alt={`Voluntariado ${index + 1}`}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
