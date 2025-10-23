import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './styles/LocationCard.module.css';

export default function LocationCard({
  image,
  title,
  description,
  rating,
  visits,
}) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.star}>
        <FaStar size={34} />
      </div>

      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.stats}>
          <span>⭐ {rating}</span>
          <span>👣 {visits}</span>
        </div>
      </div>
    </div>
  );
}
