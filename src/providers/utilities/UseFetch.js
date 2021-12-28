import { useState, useEffect } from 'react';

const useFetch = url => {
  const [items, setItems] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw Error('Unable to fetch items...');
        return res.json();
      })
      .then(data => {
        setItems(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        console.log(err.message);
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { items, isPending, error };
};

export default useFetch;
