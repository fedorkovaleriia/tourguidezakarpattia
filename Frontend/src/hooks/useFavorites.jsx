import { useState, useEffect } from 'react';

function getFavoritesFromStorage(userId) {
  const data = localStorage.getItem(`favorites_${userId}`);
  return data ? JSON.parse(data) : [];
}

function saveFavoritesToStorage(userId, favorites) {
  localStorage.setItem(`favorites_${userId}`, JSON.stringify(favorites));
}

export default function useFavorites(user) {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }
    const data = getFavoritesFromStorage(user.id);
    setFavorites(data);
  }, [user]);

  const addFavorite = (locationId) => {
    if (!user) return;
    if (!favorites.includes(locationId)) {
      const updated = [...favorites, locationId];
      setFavorites(updated);
      saveFavoritesToStorage(user.id, updated);
    }
  };

  const removeFavorite = (locationId) => {
    if (!user) return;
    if (favorites.includes(locationId)) {
      const updated = favorites.filter((id) => id !== locationId);
      setFavorites(updated);
      saveFavoritesToStorage(user.id, updated);
    }
  };

  const toggleFavorite = (locationId) => {
    if (favorites.includes(locationId)) {
      removeFavorite(locationId);
    } else {
      addFavorite(locationId);
    }
  };

  const isFavorite = (locationId) => favorites.includes(locationId);

  return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
}
