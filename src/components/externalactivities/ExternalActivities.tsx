"use client";

import React from "react";
import styles from "../../styles/externalactivities/ExternalActivities.module.css";
import {
  Mic,
  Users2,
  GraduationCap,
  Music2,
  Megaphone,
  Network,
  Globe2,
  Lightbulb,
} from "lucide-react";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import dynamic from "next/dynamic";

// Import dinámico del carousel (solo client-side)
const CarouselExternal = dynamic(
  () => import("./carouselexternal/CarouselExternal"),
  {
    ssr: false,
  }
);

const cards = [
  {
    icon: <Mic size={28} className={styles.icon} />,
    title: "Conferencias Educativas",
    text: "Participamos en conferencias y seminarios sobre educación popular y trabajo comunitario, compartiendo nuestras experiencias y metodologías.",
  },
  {
    icon: <Users2 size={28} className={styles.icon} />,
    title: "Intercambios con Otras Organizaciones",
    text: "Realizamos intercambios de experiencias con otras brigadas y organizaciones sociales de diferentes provincias del país.",
  },
  {
    icon: <GraduationCap size={28} className={styles.icon} />,
    title: "Capacitaciones",
    text: "Organizamos y participamos en capacitaciones para voluntarios y educadores populares, fortaleciendo herramientas pedagógicas.",
  },
  {
    icon: <Music2 size={28} className={styles.icon} />,
    title: "Eventos de Recaudación",
    text: "Organizamos eventos culturales y de recaudación de fondos para sostener nuestros proyectos educativos en los barrios.",
  },
  {
    icon: <Megaphone size={28} className={styles.icon} />,
    title: "Campañas de Concientización",
    text: "Desarrollamos campañas de concientización sobre la importancia de la educación y los derechos de niños y jóvenes.",
  },
  {
    icon: <Network size={28} className={styles.icon} />,
    title: "Redes de Colaboración",
    text: "Formamos parte de redes provinciales y nacionales de organizaciones que trabajan por la educación y la inclusión social.",
  },
  {
    icon: <Globe2 size={28} className={styles.icon} />,
    title: "Visibilidad Internacional",
    text: "Gracias al trabajo sostenido, hemos sido invitados a compartir nuestras experiencias en espacios internacionales de educación y derechos humanos.",
  },
  {
    icon: <Lightbulb size={28} className={styles.icon} />,
    title: "Innovación Comunitaria",
    text: "Promovemos metodologías creativas en nuestras intervenciones, incluyendo proyectos de arte, tecnología y comunicación popular.",
  },
];

const ExternalActivities: React.FC = () => {
  return (
    <section id="external-activities" className={styles.section}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Mic size={16} style={{ marginRight: "0.4rem" }} />
            Más Allá de los Barrios
          </span>
        </div>

        <h2 className={styles.mainTitle}>
          ¿Qué Actividades Hemos Realizado <span>Fuera de los Barrios?</span>
        </h2>

        <p className={styles.intro}>
          Nuestro trabajo trasciende los límites barriales. Participamos en
          diversas actividades que nos permiten ampliar nuestro impacto y
          fortalecer redes de trabajo colaborativo.
        </p>

        {/* Versión de escritorio */}
        <div className={styles.cardsWrapper}>
          {cards.map((card, idx) => (
            <div key={idx} className={styles.card}>
              {card.icon}
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.text}>{card.text}</p>
            </div>
          ))}
        </div>

        {/* Versión móvil con carrusel */}
        <div className={styles.carouselWrapper}>
          <CarouselExternal />
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ExternalActivities;
