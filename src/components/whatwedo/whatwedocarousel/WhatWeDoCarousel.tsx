"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../styles/activitylocations/ActivityCarousel.module.css";

import WhatWeDoCard from "../whatwedocard/WhatWeDoCard";

interface WhatWeDoItem {
  id: number;
  icon: string;
  title: string;
  text: string;
  badge: string;
}

interface CarouselProps {
  data: WhatWeDoItem[];
  iconMap: Record<string, React.ReactNode>;
}

const AUTOPLAY_INTERVAL = 5000;

const WhatWeDoCarousel: React.FC<CarouselProps> = ({ data, iconMap }) => {
  const [currentId, setCurrentId] = useState(data[0].id);

  /* ===============================
     AUTOPLAY
  =============================== */
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = data.findIndex((item) => item.id === currentId);

      const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;

      setCurrentId(data[nextIndex].id);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [currentId, data]);

  return (
    <>
      {/* Slides */}
      <div className={styles.carouselContainer}>
        {data.map((item) =>
          item.id === currentId ? (
            <div key={item.id} className={styles.carouselSlide}>
              <WhatWeDoCard
                icon={iconMap[item.icon]}
                title={item.title}
                text={item.text}
                badge={item.badge}
              />
            </div>
          ) : null,
        )}
      </div>

      {/* Indicators */}
      <div className={styles.carouselIndicators}>
        {data.map((item) => (
          <button
            key={item.id}
            className={`${styles.carouselIndicator} ${
              item.id === currentId ? styles.carouselIndicatorActive : ""
            }`}
            onClick={() => setCurrentId(item.id)}
            aria-label={`Ir al eje ${item.id}`}
          />
        ))}
      </div>
    </>
  );
};

export default WhatWeDoCarousel;
