import React, { useState, useCallback } from "react";

// Reusable hook for http requests
export default function useHttp() {
  // states within custom hook
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // A separate function to make a HTTP request, component should call http req by calling this function.
  /* 
    responseConfig -- Object keys: url, method, header, body
    dataProcessor -- Unique function for components to handle their received data.
  */
  const sendRequest = useCallback(async (responseConfig, dataProcessor) => {
    setIsLoading(true);
    setError(null);

    try {
      // Establish a http request based on responseConfig param
      const response = await fetch(responseConfig.url, {
        method: responseConfig.method ? responseConfig.method : "GET",
        header: responseConfig.header ? responseConfig.header : {},
        body: responseConfig.body ? JSON.stringify(responseConfig.body) : null,
      });

      const data = await response.json();

      // Provide flexibility for component to handle data in its way.
      dataProcessor(data);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  return { error, isLoading, sendRequest }; // Object
}
