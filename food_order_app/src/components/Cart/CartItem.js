import React from 'react';

import styles from './CartItem.module.css'
import AmountButton from '../UI/AmountButton'

export default function CartItem(props) {
  return (<div className={styles.foodItem}>
    <div className={styles.foodItemControl}>
        <h3>{props.item.title}</h3>
        <p className={styles.item}>{props.item.description}</p>
        <p className={styles.foodPrice}>${props.item.price}</p>
      </div>

      <div className={styles.foodItemControl}>
        <AmountButton>+</AmountButton>
        <p>{props.item.amount}</p>
      </div>
  </div>)
}