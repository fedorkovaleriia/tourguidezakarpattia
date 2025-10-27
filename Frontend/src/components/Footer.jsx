import React from 'react';
import styles from './styles/Footer.module.css';

export default function Footer({ page }) {
  return (
    <footer
      className={`${styles.footer} ${page === 'green' ? styles.green : styles.beige}`}
    >
      <p className={styles.footerText}>
        Старовинні замки, величні Карпати, термальні джерела та автентична кухня
        — усе в Закарпатті
      </p>

      <div className={styles.contactInfo}>
        <p className={styles.location}>📍Ужгород, Україна</p>
        <p className={styles.phone}>+380**********</p>
        <p className={styles.email}>zakarpattia@tour.ua</p>
      </div>
    </footer>
  );
}
