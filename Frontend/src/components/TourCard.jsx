import React from 'react';
import styles from './styles/TourCard.module.css';

export default function TourCard({ image, title, description, onClick }) {
  return (
    <button className={styles.tourCard} onClick={onClick}>
      <img src={image} alt={title} className={styles.tourCardImage} />
      <h3 className={styles.tourCardTitle}>{title}</h3>
      <p className={styles.tourCardDescription}>{description}</p>
    </button>
  );
}
