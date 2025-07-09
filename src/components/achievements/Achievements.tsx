"use client";

import React from "react";
import styles from "../../styles/Achievements.module.css";
import { Building2, Award, Landmark } from "lucide-react";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className={styles.section}>
      <FadeInOnScroll>
        {/* Badge superior */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Award size={16} style={{ marginRight: "0.4rem" }} />
            Nuestros Logros
          </span>
        </div>

        <h2 className={styles.mainTitle}>
          <span>Nuestros</span> <span>Logros</span>
        </h2>

        <p className={styles.intro}>
          Cada logro representa el esfuerzo conjunto de nuestra comunidad y el
          impacto positivo que podemos generar trabajando unidos.
        </p>

        <div className={styles.cardsWrapper}>
          {/* Logro 1 */}
          <div className={styles.card}>
            <Building2 size={32} className={styles.icon} />
            <h3 className={styles.title}>Un Ladrillito para el Alfonso</h3>
            <p className={styles.text}>
              Uno de los logros más importantes que hemos conseguido ha sido la
              construcción de nuestra querida aula en el Barrio Alfonso XIII.
              Este espacio representa el sueño hecho realidad de tener un lugar
              propio donde desarrollar nuestras actividades educativas.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Infraestructura Propia</span>
              <span className={styles.tag}>Trabajo Comunitario</span>
            </div>
          </div>

          {/* Logro 2 */}
          <div className={styles.card}>
            <Award size={32} className={styles.icon} />
            <h3 className={styles.title}>Premios Recibidos</h3>
            <p className={styles.text}>
              Hemos sido reconocidos por nuestro trabajo solidario y educativo,
              destacando nuestra labor en derechos humanos y compromiso
              comunitario.
            </p>
            <ul className={styles.list}>
              <li>🏅 Premio Sanjuanino Solidario</li>
              <li>🌍 Premio Ana Frank</li>
            </ul>
            <div className={styles.tags}>
              <span className={styles.tag}>Reconocimiento Social</span>
              <span className={styles.tag}>Derechos Humanos</span>
            </div>
          </div>

          {/* Logro 3 */}
          <div className={styles.card}>
            <Landmark size={32} className={styles.icon} />
            <h3 className={styles.title}>Congreso de Políticas Públicas</h3>
            <p className={styles.text}>
              Participamos activamente en el Congreso Nacional de Políticas
              Públicas, compartiendo experiencias y metodologías en educación
              popular junto a otras organizaciones del país.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Políticas Públicas</span>
              <span className={styles.tag}>Participación Nacional</span>
              <span className={styles.tag}>Intercambio</span>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Achievements;
