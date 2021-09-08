import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import useInput from "../../hooks/use-input";

import styles from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    value: titleValue,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
  } = useInput((input) => {return input.length > 0});
  
  const {
    value: imageValue,
    hasError: imageHasError,
    valueChangeHandler: imageChangeHandler,
    inputBlurHandler: imageBlurHandler,
  } = useInput((input) => {return true});
  
  const {
    value: addressValue,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useInput((input) => {return input.length > 0});
  
  const {
    value: descriptionValue,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
  } = useInput((input) => {return input.length > 0});
  
  useEffect(() => {
    setIsFormValid(!titleHasError && !addressHasError && !imageHasError && !descriptionHasError)
  }, [titleHasError, addressHasError, imageHasError, descriptionHasError]);

  const submitHandler = (event) => {
    event.preventDefault();
    
    console.log('Submitted');
  }

  return (
    <div className={styles.row}>
      <form className={styles.meetupForm} onSubmit={submitHandler}>
        <div className={`${styles.formInput} ${titleHasError ? styles.invalid : ''}`}>
          <label>Meetup Title</label>
          <input value={titleValue} onChange={(event) => titleChangeHandler(event.target.value)} onBlur={titleBlurHandler}/>
        </div>
        <div className={`${styles.formInput} ${imageHasError ? styles.invalid : ''}`}>
          <label>Meetup Image URL (Optional)</label>
          <input value={imageValue} onChange={(event) => imageChangeHandler(event.target.value)} onBlur={imageBlurHandler}/>
        </div>
        <div className={`${styles.formInput} ${addressHasError ? styles.invalid : ''}`}>
          <label>Address</label>
          <input value={addressValue} onChange={(event) => addressChangeHandler(event.target.value)} onBlur={addressBlurHandler}/>
        </div>
        <div className={`${styles.formInput} ${descriptionHasError ? styles.invalid : ''}`}>
          <label>Description</label>
          <textarea value={descriptionValue} onChange={(event) => descriptionChangeHandler(event.target.value)} onBlur={descriptionBlurHandler}/>
        </div>

        <Button
          type="submit"
          onClick={() => console.log("hello")}
          disabled={!isFormValid}
          className={styles.formBtn}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}