import { useEffect, useState } from "react";

export function useMiniGuides(filters) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      const query = new URLSearchParams(filters).toString();

      const res = await fetch(`http://localhost:3002/api/miniguides?${query}`);
      const data = await res.json();
      setItems(data);
    }

    load();
  }, [filters]);

  return items;
}
