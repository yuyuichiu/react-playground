import React, { useState, useEffect } from 'react';
import styles from './CartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


export default function CartButton(props) {
  return (<button id="cart-btn" className={`${styles.cartBtn}`} onClick={props.onClick}>
    <FontAwesomeIcon icon={faCartPlus}/> Your cart 
    <span className={styles.itemCount}>
      {props.cartSum}
    </span>
  </button>)
}