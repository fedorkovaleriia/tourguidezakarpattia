import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles/Register.module.css';

export default function Register() {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.textContainer}></div>
        <div className={styles.overlayRectangle}>
          <h2>Реєстрація</h2>
          <form className={styles.loginForm}>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Ім'я"
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              required
            />

            <button type="submit">Увійти</button>
          </form>
          <p className={styles.registerLink}>
            Вже створений акаунт? <br />
            <a>Увійти</a>
          </p>
        </div>
      </div>
      <section className={styles.beigeSection}>
        <div className={styles.curve}></div>
      </section>
      <Footer page="beige" />
    </>
  );
}
