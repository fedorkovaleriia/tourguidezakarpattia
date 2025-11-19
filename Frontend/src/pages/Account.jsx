import React, { useEffect, useState } from 'react';
import FavoriteLocations from '../components/FavoriteLocation';
import FavoriteMiniguides from '../components/FavoriteMiniguides';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';
import { useAuth } from '../hooks/useAuth';
import styles from './styles/Account.module.css';

export default function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const { favorites } = useFavorites(user);

  const [tab, setTab] = useState('locations');
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    setFavoriteIds(favorites || []);
  }, [favorites]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

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
          {tab === 'locations' && (
            <FavoriteLocations favoriteIds={favoriteIds} />
          )}
          {tab === 'miniguides' && <FavoriteMiniguides />}
        </div>
      </section>

      <Footer page="beige" />
    </>
  );
}
