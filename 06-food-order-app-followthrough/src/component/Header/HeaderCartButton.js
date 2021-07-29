import React, { useState, useEffect, useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa'

import styles from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';

export default function HeaderCartButton (props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx

  const numberOfCartItems = cartCtx.items.reduce((acc, current) => {
    // reduce is needed to extract the accurate amount
    return acc + current.amount
  }, 0);

  const cartVisibilityHandler = () => {
    props.onCartVisibilityToggle();
  }

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

  useEffect(() => {
    if (items.length === 0) { return }

    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => { clearTimeout(timer) }
  }, [items])

  return (<button onClick={cartVisibilityHandler} className={btnClasses}>
    <div className={styles.cart}>
      <FaShoppingCart/>
    </div>
    <div> Your Cart </div>
    <div className={styles.badge}>{numberOfCartItems}</div>
  </button>)
}