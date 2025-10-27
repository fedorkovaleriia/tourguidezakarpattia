import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import LocationCard from '../components/LocationCard';
import styles from './styles/Account.module.css';

import synevyr from '../assets/images/synevyr.jpg';

export default function Account() {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.textContainer}>
          <h1 className={styles.textMain}>Вітаємо, ім'я на нашому сайті</h1>
        </div>
      </div>
      <section className={styles.beigeSection}>
        <div className={styles.curve}></div>
        <div className={styles.buttonWrapper}>
          <button className={styles.actionButton}>Обрані локації</button>
          <button className={styles.actionButton}>Міні-гід</button>
        </div>
        <div className={styles.locationsWrapper}>
          <LocationCard
            image={synevyr}
            title="Синевирське озеро"
            description="Розташоване в серці Карпатських гір Закарпаття, вражає кришталево чистою водою та мальовничими лісовими пейзажами."
            rating="5/5"
            visits="X візитів"
          />
        </div>
      </section>
      <Footer page="beige" />
    </>
  );
}
