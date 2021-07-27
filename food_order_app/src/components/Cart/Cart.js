import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import CartItem from './CartItem';
import Card from '../UI/Card'
import Overlay from '../UI/Overlay';
import ActionButton from '../UI/ActionButton'

const Price = styled.h2`
  text-align: right;
  margin: 7px;
`

const Title = styled.h2`
  text-align: center;
  margin: 20px;
`

export default function Cart(props) {
  const [totalPayout, setPayout] = useState(0);

  useEffect(() => {
    let newPayout = 0;
    props.cart.map(x => newPayout += x.price * x.amount)
    setPayout(newPayout)
  }, [props.cart])

  const overlayExit = (event) => {
    if(event.target.classList.contains('overlay')){
      props.onCartExit()
    }
  }

  return ReactDOM.createPortal(<Overlay onClick={overlayExit}>
    <Card>
    {props.cart.length !== 0 &&<Title>Your Cart</Title>}

      {props.cart.length === 0 && <h2 style={{textAlign: 'center', margin: '20px'}}>No items in Cart</h2>}
      {props.cart.map((c, idx) => 
        <CartItem cart={props.cart} onAmountEdit={props.onAmountEdit} item={c} key={idx}/>)}

      <div>
        {props.cart.length !== 0 &&
          <Price>Total: ${totalPayout}</Price>}
        <ActionButton onClick={props.onOrderSubmit}>Submit</ActionButton>
        <ActionButton onClick={props.onCartExit}>Close</ActionButton>
      </div>
    </Card>
  </Overlay>, document.getElementById('cart'))
}