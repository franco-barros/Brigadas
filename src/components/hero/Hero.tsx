"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Hero.module.css";

const Hero: React.FC = () => {
  // Función para hacer scroll suave sin cambiar la URL
  const handleScroll =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>Brigada Educativa</h1>
          <p className={styles.description}>
            Transformando comunidades a través de la educación y el compromiso
            social. Trabajamos en barrios populares llevando esperanza y
            oportunidades de aprendizaje.
          </p>
          <div className={styles.buttons}>
            <a
              href="#aboutus"
              className={styles.button}
              onClick={handleScroll("aboutus")}
            >
              Conocé Nuestro Trabajo
            </a>
            <a
              href="#contact"
              className={styles.buttonSecondary}
              onClick={handleScroll("contact")}
            >
              Contactanos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
