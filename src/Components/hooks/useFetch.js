import { useEffect, useState } from 'react';

export default function useFetch() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const json = await fetch('DB.json');
        const res = await json.json();
        setResponse(res);
      } catch (err) {
        setError(err);
      }
    }

    fetchData();
  }, []);

  return { response, error };
}
