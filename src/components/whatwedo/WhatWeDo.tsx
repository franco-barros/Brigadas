"use client";

import React from "react";
import styles from "../../styles/activitylocations/ActivityLocations.module.css";

import { Target, Users, BookOpen, HandHeart } from "lucide-react";

import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { WhatWeDoCarousel } from "./whatwedocarousel";
import { WhatWeDoCard } from "./whatwedocard";

/* ===============================
   DATA (Qué hacemos)
================================ */
const whatWeDoData = [
  {
    id: 1,
    icon: "target",
    title: "Formación comunitaria",
    text: "Impulsamos espacios educativos y talleres para fortalecer capacidades locales.",
    badge: "Educación",
  },
  {
    id: 2,
    icon: "users",
    title: "Acompañamiento social",
    text: "Trabajamos junto a familias y comunidades en procesos de inclusión y apoyo.",
    badge: "Comunidad",
  },
  {
    id: 3,
    icon: "book",
    title: "Promoción cultural",
    text: "Generamos propuestas culturales que refuerzan la identidad y participación.",
    badge: "Cultura",
  },
  {
    id: 4,
    icon: "heart",
    title: "Redes solidarias",
    text: "Articulamos con organizaciones e instituciones para ampliar el impacto.",
    badge: "Cooperación",
  },
];

/* ===============================
   ICON MAP
================================ */
const iconMap = {
  target: <Target size={28} className={styles.icon} />,
  users: <Users size={28} className={styles.icon} />,
  book: <BookOpen size={28} className={styles.icon} />,
  heart: <HandHeart size={28} className={styles.icon} />,
};

const WhatWeDo: React.FC = () => {
  return (
    <section id="whatwedo" className={styles.section}>
      <FadeInOnScroll>
        {/* Badge */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Target size={16} style={{ marginRight: "0.4rem" }} />
            Qué hacemos
          </span>
        </div>

        {/* Title */}
        <h2 className={styles.mainTitle}>
          Nuestros <span>Ejes de Trabajo</span>
        </h2>

        {/* Intro */}
        <p className={styles.intro}>
          Desarrollamos acciones educativas, sociales y comunitarias con un
          enfoque integral, promoviendo oportunidades y fortaleciendo redes
          territoriales.
        </p>

        {/* Desktop */}
        <div className={`${styles.cardsWrapper} ${styles.desktopOnly}`}>
          {whatWeDoData.map(({ id, icon, title, text, badge }) => (
            <WhatWeDoCard
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
          <WhatWeDoCarousel data={whatWeDoData} iconMap={iconMap} />
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default WhatWeDo;
