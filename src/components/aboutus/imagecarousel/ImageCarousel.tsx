"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../../styles/aboutus/ImageCarousel.module.css";

interface ImageCarouselProps {
  images: string[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  index,
  setIndex,
  interval = 4000,
}) => {
  /* ✅ Autoplay */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, setIndex]);

  return (
    <div className={styles.carousel}>
      <div className={styles.imageWrapper}>
        <Image
          key={images[index]}
          src={images[index]}
          alt="Imagen Brigada Educativa"
          fill
          priority
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
