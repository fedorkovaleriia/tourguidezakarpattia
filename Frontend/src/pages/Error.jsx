import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import styles from './styles/Error.module.css';

export default function Error() {
  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.subtitle}>Сторінку не знайдено 😕</p>
          <Link to="/" className={styles.backLink}>
            Повернутись на головну
          </Link>
        </div>
      </div>
      <Footer page="beige" />
    </>
  );
}
