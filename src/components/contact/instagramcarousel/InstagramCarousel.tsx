"use client";

import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import styles from "../../../styles/contact/InstagramCarousel.module.css";

interface InstaPost {
  url: string;
  imgSrc: string;
  alt: string;
}

interface InstagramCarouselProps {
  posts: InstaPost[];
}

const InstagramCarousel: React.FC<InstagramCarouselProps> = ({ posts }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    created(slider) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        slider.next();
      }, 4000);
    },
  });

  useEffect(() => {
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  if (!hasMounted) return null;

  // Desktop: grid simple con imágenes linkeadas
  if (!isMobile) {
    return (
      <div className={styles.instagramCardsContainer}>
        {posts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramCard}
          >
            <Image
              src={post.imgSrc}
              alt={post.alt}
              className={styles.instagramImage}
              width={400}
              height={400}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    );
  }

  // Mobile: carousel con autoplay
  return (
    <div ref={sliderRef} className={`keen-slider ${styles.carousel}`}>
      {posts.map((post) => (
        <a
          key={post.url}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`keen-slider__slide ${styles.slide} ${styles.instagramCard}`}
        >
          <Image
            src={post.imgSrc}
            alt={post.alt}
            className={styles.instagramImage}
            width={400}
            height={400}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};

export default InstagramCarousel;
