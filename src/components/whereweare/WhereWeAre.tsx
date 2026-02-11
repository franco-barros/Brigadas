"use client";

import React from "react";
import styles from "../../styles/whereweare/WhereWeAre.module.css";

import { MapPin, Globe, UsersRound } from "lucide-react";

import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { WhereWeAreCarousel } from "./wherewearecarousel";
import { WhereWeAreCard } from "./wherewearecard";

/* ===============================
   DATA (Dónde estamos)
================================ */
const whereWeAreData = [
  {
    id: 1,
    icon: "map",
    title: "Presencia territorial",
    text: "Trabajamos directamente en barrios y comunidades, construyendo redes locales.",
    badge: "Territorio",
  },
  {
    id: 2,
    icon: "globe",
    title: "Alcance regional",
    text: "Desarrollamos proyectos en distintos puntos de la provincia y zonas cercanas.",
    badge: "Presencia",
  },
  {
    id: 3,
    icon: "people",
    title: "Trabajo articulado",
    text: "Nos vinculamos con instituciones educativas, organizaciones y municipios.",
    badge: "Redes",
  },
];

/* ===============================
   ICON MAP
================================ */
const iconMap = {
  map: <MapPin size={28} className={styles.icon} />,
  globe: <Globe size={28} className={styles.icon} />,
  people: <UsersRound size={28} className={styles.icon} />,
};

const WhereWeAre: React.FC = () => {
  return (
    <section id="whereweare" className={styles.section}>
      <FadeInOnScroll>
        {/* Badge */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <MapPin size={16} style={{ marginRight: "0.4rem" }} />
            Dónde estamos
          </span>
        </div>

        {/* Title */}
        <h2 className={styles.mainTitle}>
          Territorio y <span>Presencia</span>
        </h2>

        {/* Intro */}
        <p className={styles.intro}>
          Nuestra labor se desarrolla en territorio, acompañando procesos
          comunitarios y fortaleciendo vínculos institucionales en distintas
          zonas.
        </p>

        {/* Desktop */}
        <div className={`${styles.cardsWrapper} ${styles.desktopOnly}`}>
          {whereWeAreData.map(({ id, icon, title, text, badge }) => (
            <WhereWeAreCard
              key={id}
              icon={iconMap[icon as keyof typeof iconMap]}
              title={title}
              text={text}
              badge={badge}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className={styles.mobileOnly}>
          <WhereWeAreCarousel data={whereWeAreData} iconMap={iconMap} />
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default WhereWeAre;
