import React from 'react';
import './styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="main-title">Туристичний гід Закарпаття</h1>

      <nav className="navigation">
        <a className="separator">І</a>
        <a href="#mini-guide" className="nav-link">
          Міні-гід
        </a>
        <a href="#catalog" className="nav-link">
          Каталог локацій
        </a>
        <a href="#account" className="nav-link">
          Акаунт
        </a>
      </nav>
    </header>
  );
}
