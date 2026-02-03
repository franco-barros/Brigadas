"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/aboutus/ImageCarousel.module.css";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={styles.carousel}>
      <button onClick={prev} className={styles.nav}>
        ‹
      </button>

      <div className={styles.imageWrapper}>
        <Image
          src={images[index]}
          alt="Imagen Brigada Educativa"
          fill
          className={styles.image}
        />
      </div>

      <button onClick={next} className={styles.nav}>
        ›
      </button>
    </div>
  );
};

export default ImageCarousel;
