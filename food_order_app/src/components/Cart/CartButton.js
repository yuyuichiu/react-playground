import React from 'react';
import styles from './CartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function CartButton(props) {
  return (<button className={styles.cartBtn} onClick={props.onClick}>
    <FontAwesomeIcon icon={faCartPlus}/> Your cart
  </button>)
}