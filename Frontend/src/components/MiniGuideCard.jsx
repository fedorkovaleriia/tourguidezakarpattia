import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './styles/MiniGuideCard.module.css';

export default function MiniGuideCard({
  image,
  title,
  route,
  rating,
  visits,
  isFavorite,
  onFavoriteToggle,
}) {
  return (
    <div className={styles.card} data-testid="mini-guide-card">
      <img src={image} alt={title} className={styles.image} />

      <div
        className={styles.star}
        data-testid="favorite-toggle"
        onClick={onFavoriteToggle}
        title={isFavorite ? 'Видалити з улюблених' : 'Додати в улюблені'}
      >
        <span
          data-testid="favorite-icon"
          className={isFavorite ? styles.favorite : styles.notFavorite}
        >
          {isFavorite ? '⭐' : '☆'}
        </span>
      </div>

      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{route}</p>
        <div className={styles.stats}>
          <span>⭐ {rating}</span>
          <span>👣 {visits}</span>
        </div>
      </div>
    </div>
  );
}
