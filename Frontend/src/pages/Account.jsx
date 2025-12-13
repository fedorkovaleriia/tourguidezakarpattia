import React, { useEffect, useState } from 'react';
import FavoriteLocations from '../components/FavoriteLocation';
import FavoriteMiniguides from '../components/FavoriteMiniguides';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import LocationCard from '../components/LocationCard';
import styles from './styles/Account.module.css';
import useFavorites from '../hooks/useFavorites'; 
import synevyr from '../assets/images/synevyr.jpg';
import { useAuth } from '../hooks/useAuth';

export default function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  const { favorites } = useFavorites(user);

  const [tab, setTab] = useState("locations");
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    if (user) {
      setFavoriteIds(favorites);
    } else {
      setFavoriteIds([]);
    }
  }, [user, favorites]);

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
          <button onClick={() => setTab('locations')} className={styles.actionButton}>
            Обрані локації
          </button>

          <button onClick={() => setTab('miniguides')} className={styles.actionButton}>
            Міні-гід
          </button>

          <button onClick={handleLogout} className={styles.actionButton}>
            Вийти
          </button>

          
        </div>

        <div className={styles.locationsWrapper}>
          
          {tab === 'locations' && <FavoriteLocations favoriteIds={favoriteIds} />}
{tab === 'miniguides' && <FavoriteMiniguides />}

        </div>
      </section>

      <Footer page="beige" />
    </>
  );
}
