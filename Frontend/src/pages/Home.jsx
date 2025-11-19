import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles/Home.module.css';
import TourCard from '../components/TourCard';
import synevyr from '../assets/images/synevyr.jpg';
import uzhzamok from '../assets/images/uzhgorodskiyzamok.jpg';
import mukzamok from '../assets/images/zamokpalanok.jpg';

export default function Home() {
    
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.textContainer}>
          <h1 className={styles.textMain}>
            Старовинні замки, величні Карпати, термальні джерела та автентична
            кухня — усе в Закарпатті
          </h1>
        </div>
      </div>
      <section className={styles.greenSection}>
        <div className={styles.curve}></div>
        <div className={styles.cardsContainer}>
          <TourCard
            image={mukzamok}
            title="Замок Паланок"
            description="Історична пам’ятка, що вражає архітектурою та панорамою."
          />
          <TourCard
            image={synevyr}
            title="Озеро Синевир"
            description="Найвідоміше гірське озеро України, оточене лісами Карпат."
          />
          <TourCard
            image={uzhzamok}
            title="Ужгородський замок"
            description="Символ стародавнього міста на річці Уж."
          />
        </div>
      </section>
      <Footer page="green" />
    </>
  );
}
