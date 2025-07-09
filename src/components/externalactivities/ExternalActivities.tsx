"use client";

import React from "react";
import styles from "../../styles/ExternalActivities.module.css";
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

        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <Mic size={28} className={styles.icon} />
            <h3 className={styles.title}>Conferencias Educativas</h3>
            <p className={styles.text}>
              Participamos en conferencias y seminarios sobre educación popular
              y trabajo comunitario, compartiendo nuestras experiencias y
              metodologías.
            </p>
          </div>

          <div className={styles.card}>
            <Users2 size={28} className={styles.icon} />
            <h3 className={styles.title}>
              Intercambios con Otras Organizaciones
            </h3>
            <p className={styles.text}>
              Realizamos intercambios de experiencias con otras brigadas y
              organizaciones sociales de diferentes provincias del país.
            </p>
          </div>

          <div className={styles.card}>
            <GraduationCap size={28} className={styles.icon} />
            <h3 className={styles.title}>Capacitaciones</h3>
            <p className={styles.text}>
              Organizamos y participamos en capacitaciones para voluntarios y
              educadores populares, fortaleciendo herramientas pedagógicas.
            </p>
          </div>

          <div className={styles.card}>
            <Music2 size={28} className={styles.icon} />
            <h3 className={styles.title}>Eventos de Recaudación</h3>
            <p className={styles.text}>
              Organizamos eventos culturales y de recaudación de fondos para
              sostener nuestros proyectos educativos en los barrios.
            </p>
          </div>

          <div className={styles.card}>
            <Megaphone size={28} className={styles.icon} />
            <h3 className={styles.title}>Campañas de Concientización</h3>
            <p className={styles.text}>
              Desarrollamos campañas de concientización sobre la importancia de
              la educación y los derechos de niños y jóvenes.
            </p>
          </div>

          <div className={styles.card}>
            <Network size={28} className={styles.icon} />
            <h3 className={styles.title}>Redes de Colaboración</h3>
            <p className={styles.text}>
              Formamos parte de redes provinciales y nacionales de
              organizaciones que trabajan por la educación y la inclusión
              social.
            </p>
          </div>

          <div className={styles.card}>
            <Globe2 size={28} className={styles.icon} />
            <h3 className={styles.title}>Visibilidad Internacional</h3>
            <p className={styles.text}>
              Gracias al trabajo sostenido, hemos sido invitados a compartir
              nuestras experiencias en espacios internacionales de educación y
              derechos humanos.
            </p>
          </div>

          <div className={styles.card}>
            <Lightbulb size={28} className={styles.icon} />
            <h3 className={styles.title}>Innovación Comunitaria</h3>
            <p className={styles.text}>
              Promovemos metodologías creativas en nuestras intervenciones,
              incluyendo proyectos de arte, tecnología y comunicación popular.
            </p>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ExternalActivities;
