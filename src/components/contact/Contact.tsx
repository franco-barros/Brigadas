"use client";

import React from "react";
import styles from "../../styles/contact/Contact.module.css";
import { Phone, Mic } from "lucide-react";
import { FaInstagram, FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import CarouselContact from "./carouselcontact/CarouselContact";
import InstagramCarousel from "./instagramcarousel/InstagramCarousel";

const instagramPosts = [
  {
    url: "https://www.instagram.com/p/DIUogHZJeEQ/",
    imgSrc: "/images/brigada2.png",
    alt: "Publicación 1",
  },
  {
    url: "https://www.instagram.com/p/DKSxOwwJqkH/",
    imgSrc: "/images/brigada1.png",
    alt: "Publicación 2",
  },
  {
    url: "https://www.instagram.com/p/DIw3vfOJgTz/",
    imgSrc: "/images/brigada.png",
    alt: "Publicación 3",
  },
];

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <FaStar size={16} />
            Contacto
          </span>
        </div>
        <h2 className={styles.title}>
          <span>¡Sumate a las </span> <span>Brigadas Educativas!</span>
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.1}>
        <div className={styles.carouselInstagramWrapper}>
          <InstagramCarousel posts={instagramPosts} />
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.2}>
        <div className={styles.instagramButtonContainer}>
          <Link
            href="https://www.instagram.com/brigadaseducativas.sj"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            <FaInstagram className={styles.instagramIcon} />
            Seguinos en @brigadaseducativas.sj
          </Link>
        </div>
      </FadeInOnScroll>

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
                  src="/images/persona.png"
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

      <FadeInOnScroll delay={0.4}>
        <div className={styles.podcastSection}>
          <div className={styles.podcastCard}>
            <Mic
              className={styles.podcastCardIcon}
              aria-hidden="true"
              size={100}
            />
            <div className={styles.podcastCardContent}>
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
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.5}>
        <div className={styles.volunteerSection}>
          <h3 className={styles.volunteerTitle}>
            ¿Querés ser parte de la Brigada?
          </h3>
          <p className={styles.volunteerText}>
            Siempre estamos buscando personas comprometidas que quieran sumarse
            a nuestro trabajo. No importa tu experiencia previa, lo importante
            es tener ganas de ayudar y aprender.
          </p>
          <a
            href="https://wa.me/5492641234567?text=Hola,%20quiero%20sumarme%20a%20la%20Brigada%20Educativa"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.volunteerButton}
          >
            Quiero Ser Voluntario/a
          </a>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Contact;
