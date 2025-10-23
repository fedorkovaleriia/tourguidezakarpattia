import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiniGuideCard from '../components/MiniGuideCard';
import FilterLocation from '../components/FilterLocation';
import styles from './styles/MiniGuide.module.css';
import kosyno from '../assets/images/kosyno.jpg';
import kankiv from '../assets/images/kankiv.jpg';
import synevyr from '../assets/images/synevyr.jpg';

export default function MiniGuide() {
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
        />
        <MiniGuideCard
          image={kosyno}
          title="Угорський колорит Закарпаття + Термали"
          route="Берегово → Термальні води Косино"
          rating="5/5"
          visits="X візитів"
        />
        <MiniGuideCard
          image={synevyr}
          title="Легенди Синевиру: день у серці Карпат"
          route="Міжгір’я → Озеро Синевир → Реабілітаційний центр ведмедів → Колочава"
          rating="5/5"
          visits="X візитів"
        />
      </section>

      <Footer page="beige" />
    </>
  );
}
