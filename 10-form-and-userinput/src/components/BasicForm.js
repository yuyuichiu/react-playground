import { useState, useEffect } from 'react'

import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    value: firstNameValue,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
  } = useInput(x => x.length > 0);

  const {
    value: lastNameValue,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
  } = useInput(x => x.length > 0);

  const {
    value: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((val) => { return /^\w+([\.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) });

  useEffect(() => {
    setIsFormValid(!firstNameHasError && !lastNameHasError && !emailHasError);
  }, [firstNameHasError, lastNameHasError, emailHasError])

  const resetForm = () => {
    firstNameChangeHandler('');
    lastNameChangeHandler('');
    emailChangeHandler('');
    firstNameInputBlurHandler(false);
    lastNameInputBlurHandler(false);
    emailInputBlurHandler(false);
    setIsFormValid(false);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (isFormValid) {
      console.log('form is valid', firstNameValue, lastNameValue, emailValue)
      resetForm();
    }
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${firstNameHasError ? 'invalid' : ''}`}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onChange={(event) => firstNameChangeHandler(event.target.value)} onBlur={() => firstNameInputBlurHandler(true)}/>
        </div>
        <div className={`form-control ${lastNameHasError ? 'invalid' : ''}`}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastNameValue} onChange={(event) => lastNameChangeHandler(event.target.value)} onBlur={() => lastNameInputBlurHandler(true)}/>
        </div>
      </div>
      <div className={`form-control ${emailHasError ? 'invalid' : ''}`}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailValue} onChange={(event) => emailChangeHandler(event.target.value)} onBlur={() => emailInputBlurHandler(true)}/>
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
