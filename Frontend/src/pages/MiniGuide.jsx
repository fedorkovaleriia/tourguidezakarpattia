import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import useFavorites from '../hooks/useFavorites';
import { useMiniGuides } from '../hooks/useMiniGuides';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiniGuideCard from '../components/MiniGuideCard';
import FilterLocation from '../components/FilterLocation';
import styles from './styles/MiniGuide.module.css';

export default function MiniGuide() {
  const { user } = useAuth();
  const { favorites, toggleFavorite } = useFavorites(user);

  const [filters, setFilters] = useState({ type: 'all' });
  const guides = useMiniGuides(filters);

  if (!guides.length) return <p>Завантаження міні-гідів...</p>;

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
          <FilterLocation onFilterChange={setFilters} />
        </div>

        {guides.map((guide) => (
          <MiniGuideCard
            key={guide.id}
            image={guide.image}
            title={guide.title}
            route={guide.route}
            rating={guide.rating || '5/5'}
            visits={`${guide.visits || 0} візитів`}
            isFavorite={favorites.includes(guide.id)}
            onFavoriteToggle={() => toggleFavorite(guide.id)}
          />
        ))}
      </section>

      <Footer page="beige" />
    </>
  );
}
