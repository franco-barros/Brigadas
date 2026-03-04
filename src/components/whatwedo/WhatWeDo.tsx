"use client";

import React from "react";
import styles from "../../styles/whatwedo/WhatWeDo.module.css";

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
    title: "Acompañamiento educativo",
    text: "Presencia sostenida y trabajo cercano con niños, niñas y familias.",
    badge: "Educación",
  },
  {
    id: 2,
    icon: "users",
    title: "Trabajo territorial",
    text: "Construcción de vínculos en los barrios, desde la escucha y la participación.",
    badge: "Comunidad",
  },
  {
    id: 3,
    icon: "book",
    title: "Organización juvenil",
    text: "Jóvenes comprometidos que se forman y participan activamente",
    badge: "Cultura",
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
            Nuestro trabajo
          </span>
        </div>

        {/* Title */}
        <h2 className={styles.mainTitle}>
          <span>Qué Hacemos</span>
        </h2>

        {/* Intro */}
        <p className={styles.intro}>
          Construimos desde la presencia en el territorio y el acompañamiento
          educativo, con una mirada colectiva y comunitaria. Desarrollamos
          acciones de apoyo escolar personalizado, talleres recreativos y
          actividades con perspectiva social con la premisa de que todos los
          niños, niñas y adolescentes de barrios populares tienen derecho a
          asistir a la escuela y a ser acompañados en su proceso formativo.
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
