"use client";

import React from "react";
import styles from "../../styles/AboutUs.module.css";
import Image from "next/image";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { Heart, BookOpen, Users, Globe, Award, Zap } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        {/* Badge arriba del título */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Users size={16} style={{ marginRight: "0.5rem" }} />
            Brigada Educativa
          </span>
        </div>

        {/* Título general */}
        <h2 className={styles.sectionTitle}>Quiénes Somos</h2>

        <div className={styles.container}>
          <div className={styles.textWrapper}>
            <p className={styles.paragraph}>
              Somos una organización comprometida con la educación y el
              desarrollo social de las comunidades más vulnerables. Nuestra
              brigada está formada por voluntarios apasionados por generar un
              cambio positivo en la sociedad.
            </p>

            <p className={styles.paragraph}>
              Creemos que la educación es la herramienta más poderosa para
              transformar vidas y comunidades. Trabajamos día a día para llevar
              oportunidades de aprendizaje a quienes más lo necesitan.
            </p>

            <h3 className={styles.subTitle}>Nuestros Pilares</h3>
            <ul className={styles.valuesList}>
              <li>
                <Heart size={20} className={styles.icon} />
                <span>Compromiso y Pasión por la Comunidad</span>
              </li>
              <li>
                <BookOpen size={20} className={styles.icon} />
                <span>Acceso Igualitario a la Educación</span>
              </li>
              <li>
                <Users size={20} className={styles.icon} />
                <span>Trabajo en Equipo y Solidaridad</span>
              </li>
              <li>
                <Globe size={20} className={styles.icon} />
                <span>Respeto y Cuidado del Entorno</span>
              </li>
              <li>
                <Award size={20} className={styles.icon} />
                <span>Excelencia y Calidad en Nuestro Trabajo</span>
              </li>
              <li>
                <Zap size={20} className={styles.icon} />
                <span>Innovación para Impactar Mejor</span>
              </li>
            </ul>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/Chicos5.png"
              alt="Voluntarios Brigada Educativa"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutUs;
