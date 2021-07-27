import React, { useState } from "react";

import Header from "./components/Header/Header";
import Foods from "./components/Foods/Foods";
import Cart from './components/Cart/Cart'

import "./App.css";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartSum, setCartSum] = useState(0);

  // add item into cart
  const cartAddItemHandler = (info) => {
    setCartSum(cartSum + info.amount)
    // Update existing item / add a new item
    setCart((prevCart) => {
      for(let i = 0; i < prevCart.length; i++){
        if(prevCart[i].id === info.id){
          prevCart[i].amount += info.amount
          return prevCart
        }
      }

      prevCart.push({
        id: info.id,
        title: info.title,
        price: info.price,
        amount: info.amount
      });
      return prevCart
    });
  }

  // edit cart item amount
  const cartAmountHandler = (info, action) => {
    let newCart = cart;
    for(let i = 0; i < newCart.length; i++){
      if(newCart[i].id === info.id){
        if(action === '0'){ newCart[i].amount = 0 }
        else if(action === '+'){ newCart[i].amount++ }
        else if(action === '-'){ newCart[i].amount-- }
        break;
      }
    }
    
    newCart = newCart.filter(x => x.amount > 0);
    setCartSum(cart.reduce((a,c) => a+c.amount, 0))
    setCart(newCart);
  }

  // toggle visibility of cart UI
  const cartOpenHandler = () => {
    setCartVisible(true);
  }

  const cartExitHandler = () => {
    setCartVisible(false);
  }

  // submit the final order
  const orderSubmitHandler = () => {
    alert('Order Received, please check the developer tool for your order')
    console.log(cart);
  }

  return (
    <>
      <Header onCartOpen={cartOpenHandler} cartSum={cartSum}/>
      {cartVisible && <Cart cart={cart} onCartExit={cartExitHandler} onAmountEdit={cartAmountHandler} onOrderSubmit={orderSubmitHandler}/>}
      <Foods onAddCartItem={cartAddItemHandler}/>
    </>
  );
}

export default App;
