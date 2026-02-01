"use client";

import React from "react";
import styles from "../../styles/activitylocations/ActivityLocations.module.css";
import { MapPin, Home, School, Map } from "lucide-react";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { ActivityCarousel } from "./activitycarousel";
import { activityData } from "../../data/activities";
import { ActivityCard } from "./activitycard";

const iconMap = {
  "map-pin": <MapPin size={28} className={styles.icon} />,
  home: <Home size={28} className={styles.icon} />,
  school: <School size={28} className={styles.icon} />,
};

const ActivityLocations: React.FC = () => {
  return (
    <section id="work" className={styles.section}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Map size={16} style={{ marginRight: "0.4rem" }} />
            Actividades
          </span>
        </div>

        <h2 className={styles.mainTitle}>
          Lugares donde Desarrollamos <span>Nuestras Actividades</span>
        </h2>

        <p className={styles.intro}>
          Trabajamos en diferentes espacios comunitarios y barrios populares,
          adaptándonos a las necesidades específicas de cada comunidad.
        </p>

        {/* Desktop */}
        <div className={`${styles.cardsWrapper} ${styles.desktopOnly}`}>
          {activityData.map(({ id, icon, title, text, badge }) => (
            <ActivityCard
              key={id}
              icon={iconMap[icon]}
              title={title}
              text={text}
              badge={badge}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className={styles.mobileOnly}>
          <ActivityCarousel data={activityData} />
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ActivityLocations;
