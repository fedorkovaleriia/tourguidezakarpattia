import React, { forwardRef } from 'react';
import styles from './styles/LocationCard.module.css';
const LocationCard = forwardRef(({
  image,
  title,
  description,
  rating,
  visits,
  isFavorite,
  onFavoriteToggle,
}, ref) => {
  return (
    <div className={styles.card} ref={ref} data-testid="location-card">
      <img src={image} alt={title} className={styles.image} />

      <div
        className={styles.star}
        data-testid="favorite-toggle"
        onClick={onFavoriteToggle}
        title={isFavorite ? 'Видалити з улюблених' : 'Додати в улюблені'}
      >
        <span data-testid="favorite-icon" className={isFavorite ? styles.favorite : styles.notFavorite}>
          {isFavorite ? '⭐' : '☆'}
        </span>
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
});

export default LocationCard;
