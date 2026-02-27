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
    text: `La Unión Vecinal Larman es el lugar donde comenzamos nuestras actividades, con un merendero organizado en el año 2020 donde realizabamos principalmente actividades y juegos recreativos, pero con la intención de generar espacios de enseñanza para los niños y niñas que asistían.`,
    badge: "Desde 2020",
  },
  {
    id: 2,
    title: "Barrio Popular Villa La Esperanza",
    text: `El barrio está ubicado en el Medanito, departamento Rawson, de la provincia de San Juan. La Esperanza cuenta con una comunidad pequeña, compuesta por unas 28 familias, con muchas necesidades básicas insatisfechas y derechos vulnerados. Realizamos actividades que van desde clases de apoyo a variados talleres que acompañan el proceso educativo de cada niño, niña y adolescente.`,
    badge: "Rawson",
  },
  {
    id: 3,
    title: "Barrio Popular Alfonso XIII",
    text: `Es el asentamiento más grande en el cual desarrollamos nuestras actividades. Abordamos las problemáticas de muchos vecinos y vecinas, realizando un trabajo integral. Para el dictado de las clases de apoyo contamos con un aula que logramos construir en la casa de una vecina del barrio. `,
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
