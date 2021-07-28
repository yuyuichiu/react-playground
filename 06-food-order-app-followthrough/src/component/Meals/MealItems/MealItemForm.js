import React from 'react';

import styles from './MealItemForm.module.css'

export default function MealItemForm(props) {
  return <form className={styles.form}>
    <div>
      <label>Amount: </label>
      <input type="number" />
    </div>
    <button>+ Add</button>
  </form>
}