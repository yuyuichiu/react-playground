import { useEffect, useState } from "react";

// Detect input on submit / on lost focus / on every change
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false); 
  const [formValid, setFormValid] = useState(false);

  const enteredNameIsValid = enteredName.trim().length > 0;
  const enteredEmailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail);
  
  useEffect(() => {
    setFormValid(enteredNameIsValid && enteredEmailIsValid);
  }, [enteredNameIsValid, enteredEmailIsValid])

  const enterNameInputHandler = (event) => { setEnteredName(event.target.value); }
  const enterEmailInputHandler = (event) => { setEnteredEmail(event.target.value); }

  const nameInputBlurHandler = (event) => { setEnteredNameTouched(true); };
  const emailInputBlurHandler = (event) => { setEnteredEmailTouched(true); }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (formValid) {
      console.log('Success', enteredName);
      console.log('Success', enteredEmail);
      setEnteredName('');
      setEnteredEmail('');
      setEnteredEmailTouched(false);
      setEnteredNameTouched(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!enteredNameIsValid && enteredNameTouched ? 'invalid' : ''}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enterNameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && enteredNameTouched && (
          <p className="error-text">Input cannot be blank</p>
        )}
      </div>

      <div className={`form-control ${!enteredEmailIsValid && enteredEmailTouched ? 'invalid' : ''}`}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="name"
          onChange={enterEmailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {!enteredEmailIsValid && enteredEmailTouched && (
          <p className="error-text">Invalid email</p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
