"use client";

import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../../styles/externalactivities/CarouselExternal.module.css";
import {
  Mic,
  Users2,
  GraduationCap,
  Music2,
  Megaphone,
  Network,
  Globe2,
  Lightbulb,
} from "lucide-react";

const cards = [
  {
    icon: <Mic size={28} />,
    title: "Conferencias Educativas",
    text: "Participamos en conferencias y seminarios sobre educación popular y trabajo comunitario.",
  },
  {
    icon: <Users2 size={28} />,
    title: "Intercambios con Otras Organizaciones",
    text: "Intercambios con brigadas y organizaciones de distintas provincias.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Capacitaciones",
    text: "Capacitaciones para voluntarios y educadores populares.",
  },
  {
    icon: <Music2 size={28} />,
    title: "Eventos de Recaudación",
    text: "Eventos culturales para sostener los proyectos.",
  },
  {
    icon: <Megaphone size={28} />,
    title: "Campañas de Concientización",
    text: "Campañas sobre educación y derechos de niños y jóvenes.",
  },
  {
    icon: <Network size={28} />,
    title: "Redes de Colaboración",
    text: "Participación en redes provinciales y nacionales.",
  },
  {
    icon: <Globe2 size={28} />,
    title: "Visibilidad Internacional",
    text: "Invitaciones a espacios educativos internacionales.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Innovación Comunitaria",
    text: "Arte, tecnología y comunicación popular.",
  },
];

const CarouselExternal: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 0 },
    created(slider) {
      // Iniciar autoplay cuando el slider esté listo
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        slider.next();
      }, 4000);
    },
  });

  useEffect(() => {
    // Limpiar autoplay al desmontar
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div ref={sliderRef} className={`keen-slider ${styles.carousel}`}>
      {cards.map((card) => (
        <div key={card.title} className={`keen-slider__slide ${styles.slide}`}>
          <div className={styles.card}>
            {card.icon}
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselExternal;
