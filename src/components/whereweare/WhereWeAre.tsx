"use client";

import React from "react";
import styles from "../../styles/whereweare/WhereWeAre.module.css";

import { MapPin } from "lucide-react";

import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { WhereWeAreCarousel } from "./wherewearecarousel";
import { WhereWeAreCard } from "./wherewearecard";

/* ===============================
   DATA (Dónde estamos)
================================ */
const whereWeAreData = [
  {
    id: 1,
    title: "Unión Vecinal Larman",
    text: `La Unión Vecinal Larman es el lugar donde comenzamos nuestras actividades. 
    En el año 2020 organizamos un merendero donde se realizaban principalmente 
    actividades y juegos recreativos, con la intención de generar espacios de 
    enseñanza para los niños y niñas que asistían.`,
    badge: "Desde 2020",
  },
  {
    id: 2,
    title: "Barrio Popular Villa La Esperanza",
    text: `Ubicado en El Medanito, departamento Rawson, provincia de San Juan. 
    La Esperanza cuenta con una comunidad de aproximadamente 28 familias, 
    con múltiples necesidades básicas insatisfechas y derechos vulnerados. 
    Allí realizamos clases de apoyo y talleres que acompañan el proceso 
    educativo de niños, niñas y adolescentes.`,
    badge: "Rawson",
  },
  {
    id: 3,
    title: "Barrio Popular Alfonso XIII",
    text: `Es el asentamiento más grande en el cual desarrollamos nuestras actividades. 
    Abordamos diversas problemáticas de vecinos y vecinas y contamos con un aula 
    construida en la casa de una vecina del barrio para dictar clases de apoyo. 
    La presencia territorial es una parte central de nuestro trabajo.`,
    badge: "Territorio",
  },
];

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
          Presencia en <span>barrios populares</span>
        </h2>

        {/* Intro */}
        <p className={styles.intro}>
          En San Juan existen alrededor de 81 barrios populares registrados en
          el Registro Nacional de Barrios Populares. Son espacios donde viven al
          menos ocho familias agrupadas, sin título de propiedad y con acceso
          irregular a servicios básicos. Como Brigadas, desarrollamos nuestro
          trabajo en tres barrios de la provincia.
        </p>

        {/* Desktop */}
        <div className={`${styles.cardsWrapper} ${styles.desktopOnly}`}>
          {whereWeAreData.map(({ id, title, text, badge }) => (
            <WhereWeAreCard key={id} title={title} text={text} badge={badge} />
          ))}
        </div>

        {/* Mobile */}
        <div className={styles.mobileOnly}>
          <WhereWeAreCarousel data={whereWeAreData} />
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default WhereWeAre;
