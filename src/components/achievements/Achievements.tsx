"use client";

import React from "react";
import styles from "../../styles/archievements/Achievements.module.css";
import { Award, Building2, Landmark } from "lucide-react";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { CardAchievement } from "./cardachievement";
import { CarouselAchievement } from "./carouselachievement";

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className={styles.section}>
      <FadeInOnScroll>
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
          Cada logro representa el esfuerzo conjunto de nuestra comunidad...
        </p>

        <div className={styles.desktopOnly}>
          <CardAchievement
            icon={<Building2 size={32} />}
            title="Un Ladrillito para el Alfonso"
            text="Uno de los logros más importantes..."
            tags={["Infraestructura Propia", "Trabajo Comunitario"]}
          />
          <CardAchievement
            icon={<Award size={32} />}
            title="Premios Recibidos"
            text="Hemos sido reconocidos..."
            list={["🏅 Premio Sanjuanino Solidario", "🌍 Premio Ana Frank"]}
            tags={["Reconocimiento Social", "Derechos Humanos"]}
          />
          <CardAchievement
            icon={<Landmark size={32} />}
            title="Congreso de Políticas Públicas"
            text="Participamos activamente..."
            tags={[
              "Políticas Públicas",
              "Participación Nacional",
              "Intercambio",
            ]}
          />
        </div>

        <div className={styles.mobileOnly}>
          <CarouselAchievement />
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Achievements;
