import { useEffect, useState } from "react";

import useInput from "../hooks/use-input";

// Detect input on submit / on lost focus / on every change
const SimpleInput = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);

  // Initiation of useInput custom hook values
  const {
    value: nameValue,
    hasError: isNameError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((val) => { return val.trim().length > 0 });

  const {
    value: emailValue,
    hasError: isEmailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((val) => { return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) });
  

  // Update the form valid status, which depends on the name and
  useEffect(() => {
    setIsFormValid(!isNameError && !isEmailError);
  }, [isNameError, isEmailError])


  // Input change handlers & touch handlers
  const enterNameInputHandler = (event) => nameChangeHandler(event.target.value);
  const enterEmailInputHandler = (event) => emailChangeHandler(event.target.value);

  const nameInputBlurHandler = () => nameBlurHandler(true);
  const emailInputBlurHandler = () => emailBlurHandler(true);


  // Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();
    nameBlurHandler(true);
    emailBlurHandler(true);

    if(isFormValid) {
      // Output -- success
      console.log('Success', nameValue, emailValue);

      // Reset input value
      nameChangeHandler('');
      emailChangeHandler('');
      nameBlurHandler(false);
      emailBlurHandler(false);
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isNameError ? 'invalid' : ''}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enterNameInputHandler}
          onBlur={nameInputBlurHandler}
          value={nameValue}
        />
        {isNameError && <p className="error-text">Input cannot be blank</p>}
      </div>

      <div className={`form-control ${isEmailError ? 'invalid' : ''}`}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="name"
          onChange={enterEmailInputHandler}
          onBlur={emailInputBlurHandler}
          value={emailValue}
        />
        {isEmailError && <p className="error-text">Invalid email</p>}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
