import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationCard from '../components/LocationCard';
import FilterLocation from '../components/FilterLocation';
import MapZak from '../components/Map';

import useFavorites from '../hooks/useFavorites';
import { useAuth } from '../hooks/useAuth';

import kosyno from '../assets/images/kosyno.jpg';
import kankiv from '../assets/images/kankiv.jpg';
import synevyr from '../assets/images/synevyr.jpg';

import styles from './styles/LocationDirectory.module.css';

export default function LocationDirectory() {
  const { user } = useAuth();
  const { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite } = useFavorites(user);
  const cities = [
    { id: 11, name: "Канків", lat: 48.14, lng: 23.05 },
    { id: 12, name: "Косино", lat: 48.33, lng: 22.69 },
    { id: 13, name: "Синевир", lat: 48.62, lng: 23.56 }
  ];

  const refKankiv = useRef(null);
  const refKosyno = useRef(null);
  const refSynevyr = useRef(null);

  const refs = {
    11: refKankiv,
    12: refKosyno,
    13: refSynevyr
  };

  const handleCityClick = (cityId) => {
    const target = refs[cityId];
    if (target?.current) {
      target.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.textContainer}>
          <h1>Каталог локацій</h1>
        </div>
      </div>

      <section className={styles.beigeSection}>
        <div className={styles.curve}></div>

        <div className={styles.mapWrapper}>
          <div className={styles.mapSection}>
            <div className={styles.mapContainer}>
              <MapZak
                width={900}
                height={520}
                cities={cities}
                onCityClick={handleCityClick}
              />
            </div>

            <div className={styles.filterWrapper}>
              <FilterLocation />
            </div>
          </div>
        </div>
]
          <LocationCard
            image={kankiv}
            ref={refKankiv}
            title="Замок Канків"
            description="Розташований поблизу міста Виноградів у Закарпатській області, вражає своєю середньовічною архітектурою та мальовничим оточенням."
            rating="5/5"
            visits="X візитів"
            isFavorite={favorites.includes(11)}
            onFavoriteToggle={() => toggleFavorite(11)}
          />]

          <LocationCard
            image={kosyno}
            ref={refKosyno}
            title="Термальні води Косино"
            description="Термальні басейни Косино у Закарпатті приваблюють відпочивальників цілющою водою та сучасними спа-комплексами."
            rating="5/5"
            visits="X візитів"
            isFavorite={favorites.includes(12)}
            onFavoriteToggle={() => toggleFavorite(12)}
          />

          <LocationCard
            image={synevyr}
            ref={refSynevyr}
            title="Синевирське озеро"
            description="Розташоване в серці Карпатських гір Закарпаття, вражає кришталево чистою водою та мальовничими лісовими пейзажами."
            rating="5/5"
            visits="X візитів"
            isFavorite={favorites.includes(13)}
            onFavoriteToggle={() => toggleFavorite(13)}
          />
      </section>

      <Footer page="beige" />
    </>
  );
}