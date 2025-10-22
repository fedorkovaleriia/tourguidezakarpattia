import React from 'react';
import './styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Старовинні замки, величні Карпати, термальні джерела та автентична кухня
        — усе в Закарпатті
      </p>

      <div className="contact-info">
        <p className="location">Ужгород, Україна</p>
        <p className="phone">+380**********</p>
        <p className="email">zakarpattia@tour.ua</p>
      </div>
    </footer>
  );
}
