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
import Image from "next/image";
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
            {/* NOMBRE */}
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

            {/* EMAIL */}
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

            {/* TELÉFONO */}
            <div className={styles.formGroup}>
              <div className={styles.labelWithIcon}>
                <Phone size={16} />
                <label htmlFor="phone">Teléfono (opcional)</label>
              </div>
              <input type="tel" id="phone" name="phone" placeholder="264..." />
            </div>

            {/* MOTIVO */}
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

            {/* MENSAJE */}
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

      {/* INSTAGRAM */}
      <FadeInOnScroll delay={0.2}>
        <div className={styles.instagramButtonContainer}>
          <Link
            href="https://www.instagram.com/brigadaseducativas.sj"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            <FaInstagram />
            Seguinos en @brigadaseducativas.sj
          </Link>
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
                <Image
                  src="/images/Chicos1.png"
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
            ))}
          </div>

          <div className={styles.carouselContactWrapper}>
            <CarouselContact />
          </div>
        </>
      </FadeInOnScroll>

      {/* PODCAST + VOLUNTARIADO */}
      <FadeInOnScroll delay={0.4}>
        <div className={styles.cardsRow}>
          <div className={styles.podcastCard}>
            <Mic className={styles.podcastCardIcon} size={100} />
            <p className={styles.podcastCardText}>
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

          <div className={styles.volunteerSection}>
            <h3 className={styles.volunteerTitle}>
              ¿Querés ser parte de la Brigada?
            </h3>
            <p className={styles.volunteerText}>
              Siempre estamos buscando personas comprometidas que quieran
              sumarse a nuestro trabajo.
            </p>
            <a
              href="https://wa.me/5492641234567"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.volunteerButton}
            >
              Quiero Ser Voluntario/a
            </a>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Contact;
