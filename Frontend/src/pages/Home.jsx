import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/Home.css';
import TourCard from '../components/TourCard';
import synevyr from '../assets/images/synevyr.jpg';
import uzhzamok from '../assets/images/uzhgorodskiyzamok.jpg';
import mukzamok from '../assets/images/zamokpalanok.jpg';

export default function Home() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="text-container">
          <h1 className="text-main">
            Старовинні замки, величні Карпати, термальні джерела та автентична
            кухня — усе в Закарпатті
          </h1>
        </div>
      </div>
      <section className="green-section">
        <div className="curve"></div>
        <div className="cards-container">
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
      <Footer />
    </>
  );
}
