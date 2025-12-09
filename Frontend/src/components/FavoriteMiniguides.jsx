import React, { useEffect, useState } from "react";
import MiniGuideCard from "./MiniGuideCard";

export default function FavoriteMiniguides({ favoriteIds }) {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    if (!favoriteIds || favoriteIds.length === 0) {
      setGuides([]);
      return;
    }

    fetch(`http://localhost:3002/api/miniguides/favorites?ids=${favoriteIds.join(',')}`)
      .then(res => res.json())
      .then(data => setGuides(data))
      .catch(err => console.error(err));
  }, [favoriteIds]);

  if (!favoriteIds || favoriteIds.length === 0) return <p>У вас немає обраних міні-гідів ❤️</p>;
  if (guides.length === 0) return <p>Завантаження...</p>;

  return (
    <div style={{ width: "100%" }}>
      {guides.map(guide => (
        <MiniGuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
