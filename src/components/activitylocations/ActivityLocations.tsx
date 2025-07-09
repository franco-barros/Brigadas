"use client";

import React from "react";
import styles from "../../styles/ActivityLocations.module.css";
import { MapPin, Home, School, Map } from "lucide-react";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

const ActivityLocations: React.FC = () => {
  return (
    <section id="locations" className={styles.section}>
      <FadeInOnScroll>
        {/* Badge superior */}
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

        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <MapPin size={28} className={styles.icon} />
            <h3 className={styles.cardTitle}>Unión Vecinal Larman</h3>
            <p className={styles.cardText}>
              Uno de nuestros principales centros de operaciones, donde
              desarrollamos actividades educativas regulares y programas de
              apoyo escolar para niños y jóvenes de la comunidad.
            </p>
            <span className={styles.cardBadge}>Centro Principal</span>
          </div>

          <div className={styles.card}>
            <Home size={28} className={styles.icon} />
            <h3 className={styles.cardTitle}>Barrio Popular La Esperanza</h3>
            <p className={styles.cardText}>
              En este barrio desarrollamos programas de alfabetización y
              talleres de oficios, trabajando directamente con las familias para
              fortalecer el tejido social comunitario.
            </p>
            <span className={styles.cardBadge}>Programa Familiar</span>
          </div>

          <div className={styles.card}>
            <School size={28} className={styles.icon} />
            <h3 className={styles.cardTitle}>Barrio Popular Alfonso XIII</h3>
            <p className={styles.cardText}>
              Aquí hemos establecido nuestro proyecto más ambicioso: la
              construcción de un aula propia donde brindamos educación
              complementaria y talleres especializados.
            </p>
            <span className={styles.cardBadge}>Aula Propia</span>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ActivityLocations;
