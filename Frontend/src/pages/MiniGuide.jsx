import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationCard from '../components/LocationCard';
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
        <LocationCard
          image={kankiv}
          title="Замок Канків"
          description="Розташований поблизу міста Виноградів у Закарпатській області, вражає своєю середньовічною архітектурою та мальовничим оточенням."
          rating="5/5"
          visits="X візитів"
        />
        <LocationCard
          image={kosyno}
          title="Термальні води Косино"
          description="Термальні басейни Косино у Закарпатті приваблюють відпочивальників цілющою водою та сучасними спа-комплексами."
          rating="5/5"
          visits="X візитів"
        />
        <LocationCard
          image={synevyr}
          title="Синевирське озеро"
          description="Розташоване в серці Карпатських гір Закарпаття, вражає кришталево чистою водою та мальовничими лісовими пейзажами."
          rating="5/5"
          visits="X візитів"
        />
      </section>

      <Footer page="beige" />
    </>
  );
}
