import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context'

import styles from './MealItems.module.css'

export default function MealItems(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price
    })
  }

  return <li className={styles.meal}>
    <div>
      <h3>{props.meal.name}</h3>
      <p className={styles.description}>{props.meal.description}</p>
      <p className={styles.price}>{`$${props.meal.price.toFixed(2)}`}</p>
    </div>

    <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler}/>
  </li>
}