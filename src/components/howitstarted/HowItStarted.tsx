"use client";

import React from "react";
import styles from "../../styles/howitstarted/HowItStarted.module.css";
import { Lightbulb, Footprints, TrendingUp, Users } from "lucide-react";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { ImageCarousel } from "./imagecarousel";

const HowItStarted: React.FC = () => {
  return (
    <section id="history" className={styles.section}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Lightbulb size={16} style={{ marginRight: "0.4rem" }} />
            Inicio del Proyecto
          </span>
        </div>

        <div className={styles.wrapper}>
          {/* Contenido textual */}
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>
              <span>Cómo Inició</span> <span>el Proyecto</span>
            </h2>

            {/* Carrusel de imágenes aquí */}
            <div className={styles.gallery}>
              <ImageCarousel />
            </div>

            <p className={styles.intro}>
              Todo comenzó con una simple idea: llevar educación y esperanza a
              los barrios que más lo necesitaban. Un grupo de jóvenes
              comprometidos decidió formar esta brigada educativa para hacer la
              diferencia en sus comunidades.
            </p>

            <div className={styles.timeline}>
              <div className={styles.card}>
                <Lightbulb size={32} className={styles.icon} />
                <h3 className={styles.title}>La Semilla</h3>
                <p className={styles.text}>
                  La idea nació de la necesidad observada en los barrios
                  populares, donde muchos niños y jóvenes carecían de
                  oportunidades educativas complementarias.
                </p>
              </div>

              <div className={styles.card}>
                <Users size={32} className={styles.icon} />
                <h3 className={styles.title}>Inspiración Colectiva</h3>
                <p className={styles.text}>
                  Fue el impulso de muchos voluntarios, docentes y vecinos
                  comprometidos lo que permitió que esta idea se volviera una
                  causa común en la comunidad.
                </p>
              </div>

              <div className={styles.card}>
                <Footprints size={32} className={styles.icon} />
                <h3 className={styles.title}>Primeros Pasos</h3>
                <p className={styles.text}>
                  Comenzamos con actividades pequeñas, visitando familias y
                  organizando talleres educativos en espacios comunitarios
                  disponibles.
                </p>
              </div>

              <div className={styles.card}>
                <TrendingUp size={32} className={styles.icon} />
                <h3 className={styles.title}>Crecimiento</h3>
                <p className={styles.text}>
                  Con el tiempo, el proyecto creció y se expandió a múltiples
                  barrios, siempre manteniendo nuestro compromiso con la
                  educación de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default HowItStarted;
