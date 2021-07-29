import React, { useContext } from 'react';
import ReactDOM from 'react-dom'
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context'

import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    const cartItem = { ...item, amount: 1 }
    cartCtx.addItem(cartItem);
  }

  const cartItemRemoveHandler = (item) => {
    const cartItem = { ...item, amount: 1 }
    cartCtx.removeItem(cartItem);
  }

  const cartItem = (<ul className={styles['cart-items']}>
    {cartCtx.items.map(item => <CartItem 
    key={item.id} 
    onAdd={cartItemAddHandler.bind(null, item)}
    onRemove={cartItemRemoveHandler.bind(null, item)}
    meal={item}/>)}</ul>);

  const closeCartHandler = () => {
    props.onCartVisibilityToggle()
  }

  const orderSubmitHandler = () => {
    console.log(JSON.stringify(cartCtx.items));
    alert('The order has been received, please check developer tools for details')
  }
  
  return (ReactDOM.createPortal(<Modal onBackdropClick={closeCartHandler}>
    {cartItem}

    <div className={styles.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    <div className={styles.actions}>
      <button onClick={closeCartHandler} className={styles['button--alt']}>Close</button>
      {hasItems && <button onClick={orderSubmitHandler} className={styles.button}>Order</button>}
    </div>
  </Modal>, document.getElementById('overlay')))
}


// Markup:
// return (<div>
//   cartitems
//   <div></div>
//   <div></div>
// </div>)