import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles/Register.module.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      alert('Email має містити символ @');
      return;
    }
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'Пароль має містити щонайменше 8 символів і хоча б одну велику літеру'
      );
      return;
    }

    try {
      register(username, email, password);
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
          <h2>Реєстрація</h2>

          <form className={styles.loginForm} onSubmit={handleRegister}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ім'я користувача"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Зареєструватися</button>
          </form>

          <p className={styles.registerLink}>
            Вже маєш акаунт? <br />
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
