"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../styles/archievements/CarouselAchievement.module.css";
import { Building2, Award, Landmark } from "lucide-react";
import { CardAchievement } from "../cardachievement";

const data = [
  {
    icon: <Building2 size={32} />,
    title: "Un Ladrillito para el Alfonso",
    text: "Uno de los logros más importantes que hemos conseguido ha sido la construcción de nuestra querida aula...",
    tags: ["Infraestructura Propia", "Trabajo Comunitario"],
  },
  {
    icon: <Award size={32} />,
    title: "Premios Recibidos",
    text: "Hemos sido reconocidos por nuestro trabajo solidario y educativo...",
    list: ["🏅 Premio Sanjuanino Solidario", "🌍 Premio Ana Frank"],
    tags: ["Reconocimiento Social", "Derechos Humanos"],
  },
  {
    icon: <Landmark size={32} />,
    title: "Congreso de Políticas Públicas",
    text: "Participamos activamente en el Congreso Nacional de Políticas Públicas...",
    tags: ["Políticas Públicas", "Participación Nacional", "Intercambio"],
  },
];

const CarouselAchievement: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((item, i) => (
            <div key={i} className={styles.carouselSlide}>
              <CardAchievement {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carouselIndicators}>
        {data.map((_, i) => (
          <span
            key={i}
            className={`${styles.carouselIndicator} ${
              i === current ? styles.carouselIndicatorActive : ""
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselAchievement;
