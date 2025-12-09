import React, { useEffect, useState } from 'react';
import FavoriteLocation from '../components/FavoriteLocation';
import FavoriteMiniguides from '../components/FavoriteMiniguides';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Account.module.css';
import useFavorites from '../hooks/useFavorites';
import { useAuth } from '../hooks/useAuth';

export default function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { favorites = [] } = useFavorites(user);
const { favorites: favoriteLocations } = useFavorites(user, 'locations');
const { favorites: favoriteGuides } = useFavorites(user, 'guides');
  const [tab, setTab] = useState("locations");
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    setFavoriteIds(favorites);
  }, [user, favorites, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return <p>Завантаження...</p>;

  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.textContainer}>
          <h1 className={styles.textMain}>
            Вітаємо, <strong>{user.username}</strong> на нашому сайті
          </h1>
        </div>
      </div>

      <section className={styles.beigeSection}>
        <div className={styles.curve}></div>

        <div className={styles.buttonWrapper}>
          <button
            onClick={() => setTab('locations')}
            className={styles.actionButton}
          >
            Обрані локації
          </button>
          <button
            onClick={() => setTab('miniguides')}
            className={styles.actionButton}
          >
            Міні-гід
          </button>
          <button onClick={handleLogout} className={styles.actionButton}>
            Вийти
          </button>
        </div>

        <div className={styles.locationsWrapper}>
          
  {tab === 'locations' && <FavoriteLocation favoriteIds={favoriteLocations} />}
  {tab === 'miniguides' && <FavoriteMiniguides favoriteIds={favoriteGuides} />}
        </div>
      </section>

      <Footer page="beige" />
    </>
  );
}
