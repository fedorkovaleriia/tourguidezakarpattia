import { useState, useEffect } from "react";

function getFavoritesFromStorage(userId, type) {
  const key = type === 'guides' ? `favoritesGuides_${userId}` : `favorites_${userId}`;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function saveFavoritesToStorage(userId, favorites, type) {
  const key = type === 'guides' ? `favoritesGuides_${userId}` : `favorites_${userId}`;
  localStorage.setItem(key, JSON.stringify(favorites));
}

export default function useFavorites(user, type = 'locations') {
  const [favorites, setFavorites] = useState([]); 

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }
    const data = getFavoritesFromStorage(user.id, type);
    setFavorites(data);
    
    console.log("Favorites for user", user.id, type, data);
  }, [user, type]);

  const addFavorite = (id) => {
    if (!user) return;
    if (!favorites.includes(id)) {
      const updated = [...favorites, id];
      setFavorites(updated);
      saveFavoritesToStorage(user.id, updated, type);
    }
  };

  const removeFavorite = (id) => {
    if (!user) return;
    if (favorites.includes(id)) {
      const updated = favorites.filter(f => f !== id);
      setFavorites(updated);
      saveFavoritesToStorage(user.id, updated, type);
    }
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) removeFavorite(id);
    else addFavorite(id);
  };

  const isFavorite = (id) => favorites.includes(id);

  return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
}
