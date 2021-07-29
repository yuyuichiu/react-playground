import React, { useState } from 'react';

import './App.css'
import Cart from './component/Cart/Cart';
import Header from './component/Header/Header'
import Meals from './component/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const cartVisibilityHandler = () => {
    setCartVisible(!cartVisible);
  }

  return (<CartProvider>
    {cartVisible && <Cart onCartVisibilityToggle={cartVisibilityHandler}/>}
    <Header onCartVisibilityToggle={cartVisibilityHandler}/>
    <Meals />
  </CartProvider>);
}

export default App;
