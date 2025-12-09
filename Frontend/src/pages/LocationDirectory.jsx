import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationCard from '../components/LocationCard';
import FilterLocation from '../components/FilterLocation';
import MapZak from '../components/Map';

import useFavorites from '../hooks/useFavorites';
import { useAuth } from '../hooks/useAuth';
import { useItems } from '../hooks/useItems';

import styles from './styles/LocationDirectory.module.css';

export default function LocationDirectory() {
  const { user } = useAuth();
  const { favorites, toggleFavorite } = useFavorites(user);

  const [filters, setFilters] = useState({});

  // 🔥 Ось тут ми підключаємо хук
  const locations = useItems(filters);

  const refs = useRef({});

  // 🔥 перебудовуємо refs коли міняється список локацій
  useEffect(() => {
    const newRefs = {};
    locations.forEach(loc => {
      newRefs[loc.id] = React.createRef();
    });
    refs.current = newRefs;
  }, [locations]);

  const handleCityClick = (id) => {
    const target = refs.current[id];
    if (target?.current) {
      target.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!locations.length) return <p>Завантаження локацій...</p>;

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
                cities={locations.map(loc => ({
                  id: loc.id,
                  name: loc.title,
                  lat: loc.lat || 0, 
                  lng: loc.lng || 0
                }))}
                onCityClick={handleCityClick}
              />
            </div>

            <div className={styles.filterWrapper}>
              {/* 🔥 Тепер фільтр змінює filters → useItems підтягує нові дані */}
              <FilterLocation onFilterChange={setFilters} />
            </div>
          </div>
        </div>

        {locations.map(loc => (
          <LocationCard
            key={loc.id}
            ref={refs.current[loc.id]}
            image={loc.image} 
            title={loc.title}
            description={loc.description}
            rating={loc.rating || '5/5'}
            visits={`${loc.visits || 0} візитів`}
            isFavorite={favorites.includes(loc.id)}
            onFavoriteToggle={() => toggleFavorite(loc.id)}
          />
        ))}
      </section>

      <Footer page="beige" />
    </>
  );
}
