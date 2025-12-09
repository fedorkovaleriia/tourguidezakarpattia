import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import { useAuth } from "../hooks/useAuth";

export default function FavoriteLocation({ favoriteIds }) {
  const [locations, setLocations] = useState([]);
  const { token } = useAuth(); // якщо потрібна авторизація

  useEffect(() => {
    if (!favoriteIds || favoriteIds.length === 0) {
      setLocations([]);
      return;
    }

    // робимо запит на бекенд по ID
    fetch(`http://localhost:3002/api/items/favorites?ids=${favoriteIds.join(',')}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then(res => res.json())
      .then(data => setLocations(data))
      .catch(err => console.error(err));
  }, [favoriteIds, token]);

  if (!favoriteIds || favoriteIds.length === 0) return <p>У вас немає обраних локацій ❤️</p>;
  if (locations.length === 0) return <p>Завантаження...</p>;

  return (
    <div style={{ width: "100%" }}>
      {locations.map(loc => (
        <LocationCard key={loc.id} location={loc} />
      ))}
    </div>
  );
}
