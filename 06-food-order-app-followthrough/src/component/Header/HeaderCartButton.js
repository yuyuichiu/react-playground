import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'

import styles from './HeaderCartButton.module.css'

export default function HeaderCartButton (props) {
  return (<button className={styles.button}>
    <div className={styles.cart}>
      <FaShoppingCart/>
    </div>
    <div> Your Cart </div>
    <div className={styles.badge}>0</div>
  </button>)
}