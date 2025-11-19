import React, { forwardRef } from 'react'; 
import { FaStar } from 'react-icons/fa';
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
    <div className={styles.card} ref={ref}> 
      <img src={image} alt={title} className={styles.image} />

      <div
        className={styles.star}
        onClick={onFavoriteToggle}
        title={isFavorite ? 'Видалити з улюблених' : 'Додати в улюблені'}
      >
        <FaStar
          size={34}
          color={isFavorite ? '#FFD700' : '#ccc'} 
        />
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