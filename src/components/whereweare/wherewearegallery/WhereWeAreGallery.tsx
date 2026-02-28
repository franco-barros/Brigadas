"use client";

import Image from "next/image";
import styles from "../../../styles/whereweare/WhereWeAreGallery.module.css";

const galleryImages = [
  {
    zone: "Unión Vecinal Larman",
    id: "larman",
    images: [
      { id: "larman-1", src: "/images/gallery/Larman.png" },
      { id: "larman-2", src: "/images/gallery/Larman1.png" },
      { id: "larman-3", src: "/images/gallery/Larman2.png" },
    ],
  },
  {
    zone: "Villa La Esperanza",
    id: "esperanza",
    images: [
      { id: "esperanza-1", src: "/images/gallery/Esperanza1.png" },
      { id: "esperanza-2", src: "/images/gallery/Esperanza2.png" },
      { id: "esperanza-3", src: "/images/gallery/Esperanza3.png" },
    ],
  },
  {
    zone: "Alfonso XIII",
    id: "alfonso",
    images: [
      { id: "alfonso-1", src: "/images/gallery/Alfonso.png" },
      { id: "alfonso-2", src: "/images/gallery/Alfonso1.png" },
      { id: "alfonso-3", src: "/images/gallery/Alfonso2.png" },
    ],
  },
];

const WhereWeAreGallery = () => {
  return (
    <div className={styles.gallerySection}>
      <h3 className={styles.title}>Nuestra presencia en territorio</h3>

      {galleryImages.map((zone) => (
        <div key={zone.id} className={styles.zoneBlock}>
          <h4 className={styles.zoneTitle}>{zone.zone}</h4>

          <div className={styles.grid}>
            {zone.images.map((image) => (
              <div key={image.id} className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={`${zone.zone} - ${image.id}`}
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhereWeAreGallery;
