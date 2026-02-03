"use client";

import React from "react";
import styles from "../../styles/aboutus/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { BookOpen, Users, Globe, Award, Zap } from "lucide-react";
import ImageCarousel from "./imagecarousel";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        {/* Badge */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Users size={16} />
            Brigada Educativa
          </span>
        </div>

        <h2 className={styles.sectionTitle}>Quiénes Somos</h2>

        <div className={styles.container}>
          {/* TEXTO */}
          <div className={styles.textWrapper}>
            <p className={styles.paragraph}>
              Somos una organización de estudiantes universitarios y
              profesionales comprometidos con la educación y el desarrollo
              social de barrios populares y comunidades vulnerables. Creemos en
              la organización y el trabajo colectivo como forma de construir
              comunidad. Nuestro trabajo se construye desde el hacer: estar,
              escuchar, acompañar y organizarse de manera colectiva, en
              articulación con otros actores del territorio.
            </p>

            <p className={styles.paragraph}>
              Creemos que la educación es la herramienta más poderosa para
              transformar vidas y comunidades.
            </p>

            <h3 className={styles.subTitle}>Nuestros Pilares</h3>

            <ul className={styles.valuesList}>
              <li>
                <BookOpen size={20} /> Compromiso y trabajo en equipo
              </li>
              <li>
                <Users size={20} /> Acceso Igualitario a la Educación
              </li>
              <li>
                <Globe size={20} /> Solidaridad con la comunidad
              </li>
              <li>
                <Award size={20} /> Organización juvenil
              </li>
              <li>
                <Zap size={20} /> Presencia en Barrios Populares
              </li>
            </ul>
          </div>

          {/* IMAGEN / CAROUSEL */}
          <div className={styles.imageWrapper}>
            <ImageCarousel
              images={[
                "/images/Familia.png",
                "/images/Familia7.png",
                "/images/Familia6.png",
                "/images/Familia2.png",
              ]}
            />
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutUs;
