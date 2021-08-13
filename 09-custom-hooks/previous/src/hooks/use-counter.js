import React, { useState, useEffect } from 'react';

// Name of custom hooks must start with 'use'
// It allows react to detect any violation of rules of hooks
export default function useCounter(defaultState, isForward = true) {
  const [counter, setCounter] = useState(defaultState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => isForward ? prevCounter + 1 : prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // You can return anything you want, including state
  // This allows component to capture it into a variable, just like how we capture value with useState();
  return counter
}

// Treat custom hooks as functions, it executes when you call it.
// It groups behavior and make that reusable as a hook function.

// In this code example, we can replace the similar codes for forward and backward timer, and group them into custom hooks
// With just a bit of configuration, we make them usable in different scenarios.