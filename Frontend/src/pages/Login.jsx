import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles/Login.module.css';

export default function Login() {
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
          <h2>Увійти</h2>
          <form className={styles.loginForm}>
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
            Ще нема акаунту? <br />
            <Link to="/register">Зареєструйся</Link>
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
