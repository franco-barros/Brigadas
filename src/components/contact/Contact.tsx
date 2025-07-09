"use client";

import React from "react";
import styles from "../../styles/Contact.module.css";
import { Phone, Mic } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>¡Sumate a las Brigadas Educativas!</h2>

      <div className={styles.instagramCardsContainer}>
        <div className={styles.instagramCard}>
          <div className={styles.instagramEmbed}>
            <iframe
              src="https://www.instagram.com/p/DIUogHZJeEQ/embed"
              allow="encrypted-media"
              title="Instagram Embed 1"
            ></iframe>
          </div>
        </div>
        <div className={styles.instagramCard}>
          <div className={styles.instagramEmbed}>
            <iframe
              src="https://www.instagram.com/p/DKSxOwwJqkH/embed"
              allow="encrypted-media"
              title="Instagram Embed 2"
            ></iframe>
          </div>
        </div>
        <div className={styles.instagramCard}>
          <div className={styles.instagramEmbed}>
            <iframe
              src="https://www.instagram.com/p/DIw3vfOJgTz/embed"
              allow="encrypted-media"
              title="Instagram Embed 3"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Botón Instagram */}
      <div className={styles.instagramButtonContainer}>
        <Link
          href="https://www.instagram.com/brigadaseducativas.sj"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramButton}
        >
          Seguinos en @brigadaseducativas.sj
        </Link>
      </div>

      <div className={styles.contactGrid}>
        {/* Alejo */}
        <div className={styles.personCard}>
          <Image
            src="/images/persona.png"
            alt="Alejo García"
            width={120}
            height={120}
            className={styles.profileImage}
          />
          <div className={styles.item}>
            <Phone className={styles.icon} />
            <p>
              Alejo García:{" "}
              <a href="tel:2644771159" className={styles.phone}>
                264 477 1159
              </a>
            </p>
          </div>
        </div>

        {/* Mateo */}
        <div className={styles.personCard}>
          <Image
            src="/images/persona.png"
            alt="Mateo Molina"
            width={120}
            height={120}
            className={styles.profileImage}
          />
          <div className={styles.item}>
            <Phone className={styles.icon} />
            <p>
              Mateo Molina:{" "}
              <a href="tel:2646235026" className={styles.phone}>
                264 623 5026
              </a>
            </p>
          </div>
        </div>

        {/* Julieta */}
        <div className={styles.personCard}>
          <Image
            src="/images/persona.png"
            alt="Julieta Herrera"
            width={120}
            height={120}
            className={styles.profileImage}
          />
          <div className={styles.item}>
            <Phone className={styles.icon} />
            <p>
              Julieta Herrera:{" "}
              <a href="tel:2645856333" className={styles.phone}>
                264 585 6333
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Podcast */}
      <div className={styles.card}>
        <div className={styles.item}>
          <Mic className={styles.icon} />
          <p>
            Escuchá nuestro podcast y conocé las voces de los protagonistas.
            ¡Hacé click abajo! 👇
          </p>
          <Link
            href="https://open.spotify.com/show/tu-podcast-link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.podcastLink}
          >
            Ir al Podcast
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
