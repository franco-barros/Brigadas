"use client";

import React, { useState } from "react";
import styles from "../../styles/aboutus/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { BookOpen, Users, Globe, Award, Zap } from "lucide-react";
import ImageCarousel from "./imagecarousel";

const AboutUs: React.FC = () => {
  const images = [
    "/images/About/Image.png",
    "/images/About/Image6.png",
    "/images/About/Image5.png",
    "/images/About/Image4.png",
    "/images/About/Image3.png",
    "/images/About/Image1.png",
    "/images/About/Image2.png",
  ];

  const [index, setIndex] = useState(0);

  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        {/* Badge */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Users size={16} aria-hidden="true" />
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
              comunidad.
            </p>

            <h3 className={styles.subTitle}>Nuestros Pilares</h3>

            <ul className={styles.valuesList}>
              <li>
                <BookOpen size={20} aria-hidden="true" />
                Compromiso y trabajo en equipo
              </li>
              <li>
                <Users size={20} aria-hidden="true" />
                Acceso Igualitario a la Educación
              </li>
              <li>
                <Globe size={20} aria-hidden="true" />
                Solidaridad con la comunidad
              </li>
              <li>
                <Award size={20} aria-hidden="true" />
                Organización juvenil
              </li>
              <li>
                <Zap size={20} aria-hidden="true" />
                Presencia en Barrios Populares
              </li>
            </ul>

            <p className={`${styles.paragraph} ${styles.closingPhrase}`}>
              Nuestro trabajo se construye desde el hacer: estar, escuchar,
              acompañar y organizarse de manera colectiva, en articulación con
              otros actores del territorio.
            </p>
          </div>

          {/* IMAGEN + DOTS */}
          <div className={styles.imageWrapper}>
            <ImageCarousel images={images} index={index} setIndex={setIndex} />

            <div
              className={styles.carouselDots}
              role="tablist"
              aria-label="Selector de imágenes"
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-current={i === index ? "true" : undefined}
                  aria-label={`Ir a la imagen ${i + 1}`}
                  className={`${styles.dot} ${
                    i === index ? styles.activeDot : ""
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutUs;
