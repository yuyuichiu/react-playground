import React, { useState } from "react";

import Header from "./components/Header/Header";
import Foods from "./components/Foods/Foods";
import Cart from './components/Cart/Cart'

import "./App.css";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState([]);

  // add item into cart
  const cartAddItemHandler = (info) => {
    // Update existing item / add a new item
    setCart((prevCart) => {
      console.log(prevCart)
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

  // toggle visibility of cart UI
  const cartOpenHandler = () => {
    setCartVisible(true);
  }

  const cartExitHandler = () => {
    setCartVisible(false);
  }

  return (
    <>
      <Header onCartOpen={cartOpenHandler}/>
      {cartVisible && <Cart cart={cart} onCartExit={cartExitHandler}/>}
      <Foods onAddCartItem={cartAddItemHandler}/>
    </>
  );
}

export default App;
