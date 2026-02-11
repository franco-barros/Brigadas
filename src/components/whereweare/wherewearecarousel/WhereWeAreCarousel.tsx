"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../styles/whereweare/WhereWeAreCarousel.module.css";

import { WhereWeAreCard } from "../wherewearecard";

interface Item {
  id: number;
  icon: string;
  title: string;
  text: string;
  badge: string;
}

interface Props {
  data: Item[];
  iconMap: Record<string, React.ReactNode>;
}

const AUTOPLAY_INTERVAL = 5000;

const WhereWeAreCarousel: React.FC<Props> = ({ data, iconMap }) => {
  const [currentId, setCurrentId] = useState(data[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = data.findIndex((i) => i.id === currentId);
      const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;

      setCurrentId(data[nextIndex].id);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [currentId, data]);

  return (
    <>
      <div className={styles.carouselContainer}>
        {data.map((item) =>
          item.id === currentId ? (
            <div key={item.id} className={styles.carouselSlide}>
              <WhereWeAreCard
                icon={iconMap[item.icon]}
                title={item.title}
                text={item.text}
                badge={item.badge}
              />
            </div>
          ) : null,
        )}
      </div>

      <div className={styles.carouselIndicators}>
        {data.map((item) => (
          <button
            key={item.id}
            className={`${styles.carouselIndicator} ${
              item.id === currentId ? styles.carouselIndicatorActive : ""
            }`}
            onClick={() => setCurrentId(item.id)}
            aria-label={`Ir a tarjeta ${item.id}`}
          />
        ))}
      </div>
    </>
  );
};

export default WhereWeAreCarousel;
