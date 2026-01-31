"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Hero.module.css";

const Hero: React.FC = () => {
  const handleScroll = (id: string) => () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className={styles.hero}
      aria-label="Presentación Brigadas Educativas"
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          {/* LOGO ARRIBA */}
          <motion.img
            src="/logos/BrigadasCelesteNegro.png"
            alt="Brigadas Educativas"
            className={styles.logo}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* CARD ABAJO */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          >
            <p className={styles.description}>
              Somos una organización comprometida con el fortalecimiento del
              acceso a la educación en comunidades vulnerables. Trabajamos en el
              territorio, acompañando trayectorias educativas y construyendo
              redes solidarias.
            </p>

            <div className={styles.buttons}>
              <button
                type="button"
                className={styles.button}
                onClick={handleScroll("que-hacemos")}
                aria-label="Ir a la sección qué hacemos"
              >
                Conocé qué hacemos
              </button>

              <button
                type="button"
                className={styles.buttonSecondary}
                onClick={handleScroll("participar")}
                aria-label="Ir a la sección cómo participar"
              >
                Sumate a la brigada
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
