import React, { useState, useCallback } from 'react';

const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [dados, setDados] = useState(undefined);

  const fetchData = useCallback(async () => {
    fetch('https://jsonplaceholder.typicode.com/users');
  })

  setLoading(true);
  const result = await fetchData();
  setLoading(false);

  if(result.error) {
    setError(result.error);
  }

  if (result.dados) {
    setData(result.dados);
  }
};

export default useFetchData;