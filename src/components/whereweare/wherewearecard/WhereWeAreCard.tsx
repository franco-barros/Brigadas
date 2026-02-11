import React from "react";
import styles from "../../../styles/whereweare/WereWeAreCard.module.css";

interface Props {
  icon: React.ReactNode;
  title: string;
  text: string;
  badge: string;
}

const WhereWeAreCard: React.FC<Props> = ({ icon, title, text, badge }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
      <span className={styles.cardBadge}>{badge}</span>
    </div>
  );
};

export default WhereWeAreCard;
