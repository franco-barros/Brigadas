"use client";

import React from "react";
import styles from "../../styles/joinsection/JoinSection.module.css";
import { MessageCircle, CheckCircle, Users } from "lucide-react";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

const JoinSection: React.FC = () => {
  const whatsappNumber = "5491123456789";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <FadeInOnScroll>
      <section className={styles.JoinSection} id="participar">
        <div className={styles.badge}>
          <MessageCircle size={16} />
          Cómo Participar
        </div>

        <h2 className={styles.title}>
          <span>Sumate a la</span> <span>Brigada Educativa</span>
        </h2>

        <div className={styles.volunteerCard}>
          {/* Icono decorativo */}
          <Users className={styles.backgroundIcon} />

          <p className={styles.volunteerText}>
            Somos un espacio abierto a la participación de jóvenes que tengan
            ganas de involucrarse, aprender y trabajar colectivamente en el
            territorio.
          </p>

          <p className={styles.volunteerText}>
            No es necesario contar con experiencia previa. Lo importante es el
            compromiso, la responsabilidad y las ganas de formar parte de un
            espacio colectivo.
          </p>

          <ul className={styles.volunteerList}>
            <li>
              <CheckCircle size={18} />
              Jóvenes con interés en la educación y el trabajo territorial
            </li>
            <li>
              <CheckCircle size={18} />
              Personas con ganas de participar de manera colectiva
            </li>
            <li>
              <CheckCircle size={18} />
              Quienes quieran aportar desde el compromiso y la responsabilidad
            </li>
          </ul>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.volunteerButton}
          >
            Quiero participar
          </a>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default JoinSection;
