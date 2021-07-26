import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import CartItem from './CartItem';
import Card from '../UI/Card'
import Overlay from '../UI/Overlay';
import ActionButton from '../UI/ActionButton'

export default function Cart(props) {
  return ReactDOM.createPortal(<Overlay>
    <Card>
      {props.cart.length === 0 && <h2 style={{textAlign: 'center', margin: '20px'}}>No items in Cart</h2>}
      {props.cart.map((c, idx) => <CartItem item={c} key={idx}/>)}

      <div>
        <ActionButton onClick={props.onOrderSubmit}>Submit</ActionButton>
        <ActionButton onClick={props.onCartExit}>Close</ActionButton>
      </div>
    </Card>
  </Overlay>, document.getElementById('cart'))
}