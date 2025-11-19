import { useState } from 'react';

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function request(url, method = 'GET', body = null) {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      };

      if (body) options.body = JSON.stringify(body);

      const res = await fetch(`http://localhost:3002${url}`, options);

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || 'Помилка запиту');
      }

      return await res.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { request, loading, error };
}
