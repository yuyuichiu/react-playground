import { useState } from 'react';

export default function useHttp() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (responseConfig, applyFn) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(responseConfig.url, {
        method: responseConfig.method ? responseConfig.method : 'GET',
        header: responseConfig.header ? responseConfig.header : {},
        body: responseConfig.body ? JSON.stringify(responseConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Something went wrong on the HTTP request.')
      }
    
      const data = response.json();
  
      applyFn(data);
    } catch (error) {
      setError(error.message)
    }

    setIsLoading(false);
  }

  return { error, isLoading, sendRequest }
}