import React, { useState, useRef } from 'react';

import ActionButton from '../UI/ActionButton'

import styles from './FoodItem.module.css'

export default function FoodItem(props) {
  const [enteredAmt, setEnteredAmt] = useState(0);

  const addItemHandler = () => {
    let toAdd = {
      id: Number(props.foodInfo.id),
      title: props.foodInfo.title,
      price: props.foodInfo.price,
      amount: enteredAmt,  // to-do input handling
    }
    if(toAdd.amount > 0){
      props.onAddCartItem(toAdd);
    } else return
  }

  const amountChangeHandler = (e) => {
    setEnteredAmt(Number(e.target.value))
  }

  return(<div className={styles.foodItem}>
      <div className={styles.foodItemControl}>
        <h3>{props.foodInfo.title}</h3>
        <p className={styles.foodInfo}>{props.foodInfo.description}</p>
        <p className={styles.foodPrice}>${props.foodInfo.price}</p>
      </div>

      <div className={styles.foodItemControl}>
        <div>
          <label>Amount: </label>
          <input type="number" value={enteredAmt} onChange={amountChangeHandler} className={styles.orderInput} min="0" step="1"/>
        </div>
        <ActionButton onClick={addItemHandler} className={styles.cartAddBtn}>+ Add</ActionButton>
      </div>
  </div>)
}