import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    await login(email, password); 
    navigate('/account');         
  } catch (error) {
    alert(error.message);
  }
};


  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.textContainer}></div>
        <div className={styles.overlayRectangle}>
          <h2>Увійти</h2>

          <form className={styles.loginForm} onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Увійти</button>
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
