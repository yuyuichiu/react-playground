import { useState } from 'react'

// When constructing a custom hook, think of common functionalities
export default function useInput(validateValue) {
  // Common states
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  
  // validation is unique, handled by the parameter function
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // The common touch handler and change handler
  const valueChangeHandler = (value) => {
    setEnteredValue(value);
  }

  const inputBlurHandler = (isTouched) => {
    setIsTouched(isTouched);
  }

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  }
}