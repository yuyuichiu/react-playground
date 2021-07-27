import React from 'react';
import CartButton from '../Cart/CartButton';

import './Header.css'

function Header(props) {
  return (<div className="header">
    <div className="header__content">
      <h2 className="header__title">DessertOrders</h2>
      <CartButton onClick={props.onCartOpen} cartSum={props.cartSum}/>
    </div>
  </div>)
}

export default Header