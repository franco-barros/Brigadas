"use client";

import React from "react";
import styles from "../../styles/faqsection/FAQSection.module.css";
import { MessageCircle } from "lucide-react";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { FAQTabsCarousel } from "./FAQtabscarousel";

const FAQSection: React.FC = () => {
  return (
    <FadeInOnScroll>
      <section className={styles.faqSection} id="faq">
        <div className={styles.badge}>
          <MessageCircle size={16} style={{ marginRight: "0.4rem" }} />
          Preguntas Frecuentes
        </div>

        <h2 className={styles.title}>
          <span>Resuelve tus</span> <span>Dudas sobre la Brigada</span>
        </h2>

        <p className={styles.description}>
          Aquí respondemos las preguntas más comunes sobre cómo funciona la
          Brigada Educativa, cómo sumarte y el impacto que generamos en la
          comunidad.
        </p>

        <FAQTabsCarousel />
      </section>
    </FadeInOnScroll>
  );
};

export default FAQSection;
