"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../styles/activitylocations/ActivityCarousel.module.css";
import { MapPin, Home, School } from "lucide-react";
import { ActivityCard } from "../activitycard";
import type { ActivityLocation } from "../../../types/activities";

interface ActivityCarouselProps {
  data: ActivityLocation[];
}

const iconMap = {
  "map-pin": <MapPin size={28} />,
  home: <Home size={28} />,
  school: <School size={28} />,
};

const AUTOPLAY_INTERVAL = 5000;

const ActivityCarousel: React.FC<ActivityCarouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {data.map((item, index) => (
            <div
              key={item.id}
              className={styles.carouselSlide}
              style={{
                display: index === currentIndex ? "block" : "none",
              }}
            >
              <ActivityCard
                icon={iconMap[item.icon]}
                title={item.title}
                text={item.text}
                badge={item.badge}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className={styles.carouselIndicators}>
        {data.map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselIndicator} ${
              index === currentIndex ? styles.carouselIndicatorActive : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ActivityCarousel;
