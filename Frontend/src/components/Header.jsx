import React from 'react';
import styles from './styles/Header.module.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.mainTitle} to ="/">Туристичний гід Закарпаття</Link>

      <nav className={styles.navigation}>
        <a className={styles.separator}>І</a>
              <Link className={styles.navLink} to="/miniguide">Міні-гід</Link>

        <Link className={styles.navLink} to="/locationdirectory">Каталог локацій</Link>
        <Link className={styles.navLink} to="/account">Акаунт</Link>
      </nav>
    </header>
  );
}
