import React from 'react';
import MealItemForm from './MealItemForm';

import styles from './MealItems.module.css'

export default function MealItems(props) {
  return <li className={styles.meal}>
    <div>
      <h3>{props.meal.name}</h3>
      <p className={styles.description}>{props.meal.description}</p>
      <p className={styles.price}>{`$${props.meal.price.toFixed(2)}`}</p>
    </div>

    <MealItemForm />
  </li>
}