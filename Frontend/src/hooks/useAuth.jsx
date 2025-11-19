import { createContext, useContext, useState, useEffect } from 'react';
import { useApi } from './useApi';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const api = useApi();
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  });
  const [token, setToken] = useState(
    () => localStorage.getItem('token') || null
  );

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  useEffect(() => {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  }, [token]);

  const login = async (email, password) => {
    if (!email || !password) throw new Error('Email і пароль обовʼязкові');

    const data = await api.request('/login', 'POST', { email, password });

    if (data.accessToken) {
      setToken(data.accessToken);
      setUser(data.user);
      return data.user;
    }

    throw new Error('Не вдалося увійти');
  };

  const register = async (username, email, password) => {
    if (!username) throw new Error('Імʼя обовʼязкове');
    if (!email.includes('@')) throw new Error('Некоректний email');
    if (!password || password.length < 8)
      throw new Error('Пароль має бути ≥ 8 символів');

    const data = await api.request('/register', 'POST', {
      username,
      email,
      password,
    });

    if (data.accessToken) {
      setToken(data.accessToken);
      setUser(data.user);
    } else if (data.id) {
      setUser(data);
    }

    return data;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const getFavorites = async () => {
    if (!user) return [];
    return await api.request(`/favorites?userId=${user.id}`);
  };

  const addFavorite = async (placeId) => {
    if (!user) throw new Error('Неавторизований');
    const fav = { userId: user.id, placeId };
    return await api.request('/favorites', 'POST', fav);
  };

  const removeFavorite = async (favId) => {
    return await api.request(`/favorites/${favId}`, 'DELETE');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        getFavorites,
        addFavorite,
        removeFavorite,
        api,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
