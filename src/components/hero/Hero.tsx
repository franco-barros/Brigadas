"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/Hero.module.css";

const Hero: React.FC = () => {
  return (
    <>
      {/* ================= HERO SOLO IMAGEN ================= */}
      <section
        id="hero"
        className={styles.hero}
        aria-label="Presentación Brigadas Educativas"
      >
        <Image
          src="/images/Familia5.png"
          alt="Familia en comunidad"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.overlayGradient} />

        {/* Logo abajo derecha */}
        <div className={styles.heroLogo}>
          <Image
            src="/logos/BrigadasBlanco.png"
            alt="Brigadas Educativas"
            width={180}
            height={80}
            className={styles.logo}
            priority
          />
        </div>
      </section>

      {/* ================= SECCIÓN CARD ================= */}
      <section className={styles.introSection}>
        {/* Icono superior izquierdo */}
        <div className={styles.iconTopLeft}>
          <Image
            src="/icons/PinIcono.png" // 👈 cambiá por tu icono real
            alt=""
            width={130}
            height={130}
            className={styles.decorativeIcon}
          />
        </div>

        <div className={styles.card}>
          <p className={styles.description}>
            Somos una organización comprometida con el fortalecimiento del
            acceso a la educación en comunidades vulnerables. Trabajamos en el
            territorio, acompañando trayectorias educativas y construyendo redes
            solidarias.
          </p>
        </div>

        {/* Icono inferior derecho */}
        <div className={styles.iconBottomRight}>
          <Image
            src="/icons/LibroIcono.png"
            alt=""
            width={150}
            height={150}
            className={styles.decorativeIcon}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
