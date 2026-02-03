"use client";

import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../../styles/contact/CarouselContact.module.css";
import { Phone } from "lucide-react";
import Image from "next/image";

interface Person {
  name: string;
  phone: string;
}

const contacts: Person[] = [
  { name: "Alejo García", phone: "2644771159" },
  { name: "Mateo Molina", phone: "2646235026" },
  { name: "Julieta Herrera", phone: "2645856333" },
];

const CarouselContact: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      // Inicia autoplay al crearse el slider
      if (timer.current) clearInterval(timer.current);
      timer.current = setInterval(() => {
        slider.next();
      }, 4000);
    },
  });

  useEffect(() => {
    // Limpia el intervalo al desmontar
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <>
      <div ref={sliderRef} className={`keen-slider ${styles.carousel}`}>
        {contacts.map((person) => (
          <div
            key={person.phone}
            className={`keen-slider__slide ${styles.slide}`}
          >
            <div className={styles.personCard}>
              <Image
                src="/images/Chicos5.png"
                alt={person.name}
                width={120}
                height={120}
                className={styles.profileImage}
              />
              <div className={styles.item}>
                <Phone className={styles.icon} />
                <p>
                  {person.name}:{" "}
                  <a href={`tel:${person.phone}`} className={styles.phone}>
                    {person.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className={styles.dotsWrapper}>
        {contacts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`${styles.dot} ${
              currentSlide === idx ? styles.active : ""
            }`}
            aria-label={`Ir al contacto ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselContact;
