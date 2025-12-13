import React from 'react';
import useFavorites from '../hooks/useFavorites';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiniGuideCard from '../components/MiniGuideCard';
import FilterLocation from '../components/FilterLocation';
import styles from './styles/MiniGuide.module.css';
import kosyno from '../assets/images/kosyno.jpg';
import kankiv from '../assets/images/kankiv.jpg';
import synevyr from '../assets/images/synevyr.jpg';
import { useAuth } from '../hooks/useAuth';

export default function MiniGuide() {
  const { user } = useAuth();
    const { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite } = useFavorites(user);
  
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.textContainer}>
          <h1>Міні-гід</h1>
        </div>
      </div>

      <section className={styles.beigeSection}>
        <div className={styles.curve}></div>
        <div className={styles.filterWrapper}>
          <FilterLocation />
        </div>
        <MiniGuideCard
          image={kankiv}
          title="Від Паланку до Канкова "
          route="Мукачево (Замок Паланок) → Виноградів (Замок Канків) → Берегове"
          rating="5/5"
          visits="X візитів"
          isFavorite={favorites.includes(1)}
          onFavoriteToggle={() => toggleFavorite(1)}
        />
        <MiniGuideCard
          image={kosyno}
          title="Угорський колорит Закарпаття + Термали"
          route="Берегово → Термальні води Косино"
          rating="5/5"
          visits="X візитів"

          isFavorite={favorites.includes(2)}
          onFavoriteToggle={() => toggleFavorite(2)}
        />
        <MiniGuideCard
          image={synevyr}
          title="Легенди Синевиру: день у серці Карпат"
          route="Міжгір’я → Озеро Синевир → Реабілітаційний центр ведмедів → Колочава"
          rating="5/5"
          visits="X візитів"

          isFavorite={favorites.includes(3)}
          onFavoriteToggle={() => toggleFavorite(3)}
        />
      </section>

      <Footer page="beige" />
    </>
  );
}
