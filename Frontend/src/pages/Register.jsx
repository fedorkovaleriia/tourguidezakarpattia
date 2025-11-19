import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles/Register.module.css';

export default function Register() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/account');
  };
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

            <button onClick={handleLogin} type="submit">
              Увійти
            </button>
          </form>
          <p className={styles.registerLink}>
            Вже створений акаунт? <br />
            <Link to="/login">Увійти</Link>
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
