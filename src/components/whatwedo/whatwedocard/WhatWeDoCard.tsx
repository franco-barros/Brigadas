import React from "react";
import styles from "../../../styles/activitylocations/ActivityCard.module.css";

interface WhatWeDoCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  badge: string;
}

const WhatWeDoCard: React.FC<WhatWeDoCardProps> = ({
  icon,
  title,
  text,
  badge,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
      <span className={styles.cardBadge}>{badge}</span>
    </div>
  );
};

export default WhatWeDoCard;
