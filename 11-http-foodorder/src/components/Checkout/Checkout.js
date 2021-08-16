import React, { useState, useEffect, useContext } from "react";
import Modal from "../UI/Modal";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
import CartContext from "../../store/cart-context";

import styles from "./Checkout.module.css";

export default function Checkout(props) {
  const cartCtx = useContext(CartContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { error: httpError , isLoading: httpLoading , sendRequest } = useHttp();

  const {
    enteredValue: nameEnteredValue,
    hasError: nameHasError,
    setEnteredValue: setNameValue,
    setIsTouched: setNameIsTouched,
  } = useInput((x) => {return x.trim().length > 3});

  const {
    enteredValue: phoneEnteredValue,
    hasError: phoneHasError,
    setEnteredValue: setPhoneValue,
    setIsTouched: setPhoneIsTouched,
  } = useInput((x) => {return /^[0-9]{8,}$/.test(x)});

  const resetForm = () => {
    setNameValue('');
    setPhoneValue('');
    setNameIsTouched(false);
    setPhoneIsTouched(false);
    setIsFormValid(false);
  }
  

  useEffect(() => {
    setIsFormValid(!nameHasError && !phoneHasError);
  }, [nameHasError, phoneHasError])

  const sendRequestHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    setPhoneIsTouched(true);
    if (!isFormValid) { return }
    
    const applyData = (data) => {
      data.then(x => console.log(x))
      resetForm();
      cartCtx.clearItem();
      setIsSubmitted(true);

      setTimeout(() => {
        props.onClose();
      }, 2000)
    }

    let orderData = {
      orderedItems: cartCtx.items,
      totalAmount: cartCtx.totalAmount,
      name: nameEnteredValue,
      phone: phoneEnteredValue,
    }

    // Update to server, to do task
    sendRequest({
      url: 'https://react-test-be173-default-rtdb.asia-southeast1.firebasedatabase.app/foodOrders.json',
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: orderData
    }, applyData);
  }

  return (
    <Modal onClose={props.onClose}>
      <p>Please enter necessary information to complete the order</p>
      <small>
        We value privacy, data will be only used to contact you on order issue.
      </small>

      <form className={styles.form} onSubmit={sendRequestHandler}>
      <div className={`${styles.control} ${nameHasError ? styles.invalid : ''}`}>
          <label htmlFor="name">Name </label>
          <input
            id="name"
            type="text"
            onChange={(event) => setNameValue(event.target.value)}
            onBlur={() => setNameIsTouched(true)}
            value={nameEnteredValue}
          />
          {nameHasError && <p style={{color: '#7a2706'}}>Name must be at least 4 characters long</p>}
        </div>

        <div className={`${styles.control} ${phoneHasError ? styles.invalid : ''}`}>
          <label htmlFor="phone">Contact Number </label>
          <input
            id="phone"
            type="text"
            onChange={(event) => setPhoneValue(event.target.value)}
            onBlur={() => setNameIsTouched(true)}
            value={phoneEnteredValue}
          />
          {phoneHasError && <p style={{color: '#7a2706'}}>Please enter a valid phone number</p>}
        </div>

        <div className={styles.actions}>
          <button type='button' onClick={() => props.onClose()}>Cancel</button>
          <button className={styles.submit} disabled={isSubmitted}>{httpLoading ? 'Processing...' : 'Submit'}</button>
        </div>

        {httpError && <p className={styles.errorMsg}>There is an error on submitting the order, Please try again.</p>}
        {isSubmitted && <p className={styles.completeMsg}>Order submitted successfully! You will be redirected soon.</p>}
      </form>
    </Modal>
  );
}
