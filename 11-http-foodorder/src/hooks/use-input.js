import { useState } from 'react';

export default function useInput(validateFn) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isInputValid = validateFn(enteredValue);
  const hasError = isTouched && !isInputValid;

  return {
    enteredValue,
    hasError,
    setEnteredValue,
    setIsTouched
  }
}