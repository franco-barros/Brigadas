import React from "react";
import styles from "../../../styles/archievements/CardAchievement.module.css";

interface CardAchievementProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  tags: string[];
  list?: string[];
}

const CardAchievement: React.FC<CardAchievementProps> = ({
  icon,
  title,
  text,
  tags,
  list,
}) => (
  <div className={styles.card}>
    <div className={styles.icon}>{icon}</div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.text}>{text}</p>
    {list && (
      <ul className={styles.list}>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
    <div className={styles.tags}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default CardAchievement;
