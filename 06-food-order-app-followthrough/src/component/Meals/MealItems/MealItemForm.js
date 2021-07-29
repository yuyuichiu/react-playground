import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

import styles from './MealItemForm.module.css'

export default function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    // Validation
    if(enteredAmount < 1){
      setAmountIsValid(false);
      return
    }

    setAmountIsValid(true);
    props.onAddToCart(enteredAmount);
  }

  return <form className={styles.form} onSubmit={submitHandler}>
    <Input ref={amountInputRef} label="Amount" input={{
      id: 'amount_' + props.id,
      type: 'number',
      min: '1',
      max: '5',
      step: '1',
      defaultValue: '1'
    }} />
    <button>+ Add</button>
    {!amountIsValid && <p>Invalid Amount</p>}
  </form>
}