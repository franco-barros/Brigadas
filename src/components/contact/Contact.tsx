"use client";

import React from "react";
import styles from "../../styles/contact/Contact.module.css";
import {
  Phone,
  Mic,
  User,
  Mail,
  MessageSquare,
  ListChecks,
} from "lucide-react";
import { FaInstagram, FaStar } from "react-icons/fa";
import Link from "next/link";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import CarouselContact from "./carouselcontact/CarouselContact";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact} id="contact">
      {/* TÍTULO */}
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <FaStar size={16} />
            Contacto
          </span>
        </div>

        <h2 className={styles.title}>
          <span>¡Sumate a las </span>
          <span>Brigadas Educativas!</span>
        </h2>
      </FadeInOnScroll>

      {/* FORMULARIO */}
      <FadeInOnScroll delay={0.1}>
        <div className={styles.formWrapper}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <div className={styles.labelWithIcon}>
                <User size={16} />
                <label htmlFor="name">Nombre y apellido</label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.labelWithIcon}>
                <Mail size={16} />
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tuemail@mail.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.labelWithIcon}>
                <Phone size={16} />
                <label htmlFor="phone">Teléfono (opcional)</label>
              </div>
              <input type="tel" id="phone" name="phone" placeholder="264..." />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.labelWithIcon}>
                <ListChecks size={16} />
                <label htmlFor="reason">Motivo del contacto</label>
              </div>
              <select id="reason" name="reason" required>
                <option value="">Seleccioná una opción</option>
                <option value="voluntariado">Quiero ser voluntario/a</option>
                <option value="articulacion">Articulación institucional</option>
                <option value="donaciones">Donaciones</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.labelWithIcon}>
                <MessageSquare size={16} />
                <label htmlFor="message">Mensaje</label>
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Escribinos tu mensaje"
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar mensaje
            </button>
          </form>
        </div>
      </FadeInOnScroll>

      {/* CONTACTOS */}
      <FadeInOnScroll delay={0.3}>
        <>
          <div className={styles.contactGrid}>
            {[
              { name: "Alejo García", phone: "2644771159" },
              { name: "Mateo Molina", phone: "2646235026" },
              { name: "Julieta Herrera", phone: "2645856333" },
            ].map((person, index) => (
              <div key={index} className={styles.personCard}>
                <Phone className={styles.icon} />
                <p className={styles.personName}>{person.name}</p>
                <a href={`tel:${person.phone}`} className={styles.personPhone}>
                  {person.phone}
                </a>
              </div>
            ))}
          </div>

          <div className={styles.carouselContactWrapper}>
            <CarouselContact />
          </div>
        </>
      </FadeInOnScroll>

      {/* PODCAST + INSTAGRAM */}
      <FadeInOnScroll delay={0.4}>
        <div className={styles.cardsRow}>
          {/* INSTAGRAM */}
          <div className={styles.instagramCard}>
            <FaInstagram className={styles.instagramCardIcon} size={100} />
            <p className={styles.instagramCardText}>
              Seguinos en Instagram y enterate de nuestras actividades,
              convocatorias y novedades.
            </p>
            <Link
              href="https://www.instagram.com/brigadaseducativas.sj"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramCardButton}
            >
              <FaInstagram />
              @brigadaseducativas.sj
            </Link>
          </div>

          {/* PODCAST */}
          <div className={styles.podcastCard}>
            <Mic className={styles.podcastCardIcon} size={100} />
            <p>
              Escuchá nuestro podcast y conocé las voces de los protagonistas.
            </p>
            <Link
              href="https://open.spotify.com/show/tu-podcast-link"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.podcastCardButton}
            >
              Ir al Podcast
            </Link>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Contact;
