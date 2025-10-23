import React from 'react';
import styles from './styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.mainTitle}>Туристичний гід Закарпаття</h1>

      <nav className={styles.navigation}>
        <a className={styles.separator}>І</a>
        <a href="#mini-guide" className={styles.navLink}>
          Міні-гід
        </a>
        <a href="#catalog" className={styles.navLink}>
          Каталог локацій
        </a>
        <a href="#account" className={styles.navLink}>
          Акаунт
        </a>
      </nav>
    </header>
  );
}
