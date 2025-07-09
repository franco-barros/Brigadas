"use client";

import React, { useState } from "react";
import styles from "../../../styles/faqsection/FAQTabsCarousel.module.css";
import { ChevronDown } from "lucide-react";
import { FadeInOnScroll } from "../../shared/fadeInonscroll";

const faqItems = [
  {
    category: "General",
    questions: [
      {
        question: "¿Qué es la Brigada Educativa?",
        answer:
          "La Brigada Educativa es un grupo de voluntarios que trabajan en barrios populares para brindar apoyo educativo y social.",
      },
      {
        question: "¿Quiénes pueden sumarse a la brigada?",
        answer:
          "Cualquier persona comprometida con la educación y el desarrollo social puede unirse, sin importar su formación previa.",
      },
      {
        question: "¿Cuáles son las principales actividades de la brigada?",
        answer:
          "Realizamos talleres, clases de apoyo, campañas de concientización y actividades recreativas para niños y jóvenes.",
      },
      {
        question: "¿Dónde opera la Brigada Educativa?",
        answer:
          "Trabajamos principalmente en barrios vulnerables de nuestra región, llevando oportunidades educativas y apoyo social.",
      },
    ],
  },
  {
    category: "Participación",
    questions: [
      {
        question: "¿Cómo puedo ser voluntario?",
        answer:
          "Podés contactarnos a través de la sección de contacto y te brindaremos toda la información para sumarte.",
      },
      {
        question: "¿Se necesita alguna capacitación previa?",
        answer:
          "Ofrecemos capacitaciones para que todos los voluntarios estén preparados para trabajar con la comunidad.",
      },
      {
        question: "¿Cuánto tiempo debo dedicar para participar?",
        answer:
          "La participación es flexible, podés colaborar algunas horas a la semana o en actividades puntuales.",
      },
      {
        question: "¿Puedo aportar con donaciones en lugar de tiempo?",
        answer:
          "Sí, aceptamos donaciones para materiales educativos y organización de eventos comunitarios.",
      },
    ],
  },
  {
    category: "Impacto",
    questions: [
      {
        question: "¿Qué resultados ha logrado la brigada?",
        answer:
          "Hemos apoyado a cientos de niños y jóvenes a mejorar su rendimiento escolar y fomentar su inclusión social.",
      },
      {
        question: "¿Cómo miden el impacto social?",
        answer:
          "Realizamos evaluaciones periódicas y recibimos feedback de las comunidades para mejorar nuestras acciones.",
      },
      {
        question: "¿Puedo compartir mi experiencia como voluntario?",
        answer:
          "Claro, valoramos mucho que los voluntarios compartan sus testimonios para inspirar a otros.",
      },
      {
        question: "¿Cómo puedo apoyar si no vivo en la región?",
        answer:
          "Podés colaborar en campañas online, difusión o donaciones desde cualquier lugar.",
      },
    ],
  },
];

const FAQTabsCarousel: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    null
  );

  const toggleQuestion = (index: number) => {
    setActiveQuestionIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className={styles.tabList}>
        {faqItems.map((group, index) => (
          <button
            key={group.category}
            className={`${styles.tabItem} ${
              index === activeCategoryIndex ? styles.tabItemActive : ""
            }`}
            onClick={() => {
              setActiveCategoryIndex(index);
              setActiveQuestionIndex(null);
            }}
          >
            {group.category}
          </button>
        ))}
      </div>

      <ul className={styles.questionList}>
        {faqItems[activeCategoryIndex].questions.map((item, index) => {
          const isActive = activeQuestionIndex === index;

          return (
            <FadeInOnScroll key={item.question} delay={index * 0.1}>
              <button
                className={styles.questionItem}
                tabIndex={0}
                onClick={() => toggleQuestion(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleQuestion(index);
                }}
              >
                <div className={styles.questionHeader}>
                  <span
                    className={
                      isActive ? styles.answerText : styles.questionText
                    }
                  >
                    {isActive ? item.answer : item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`${styles.chevron} ${
                      isActive ? styles.chevronOpen : ""
                    }`}
                  />
                </div>
              </button>
            </FadeInOnScroll>
          );
        })}
      </ul>
    </>
  );
};

export default FAQTabsCarousel;
