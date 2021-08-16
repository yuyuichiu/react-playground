import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Checkout from './components/Checkout/Checkout';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);

  const showCheckoutHandler = () => {
    setCartIsShown(false);
    setCheckoutIsShown(true);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={() => setCartIsShown(false)} onCheckout={showCheckoutHandler}/>}
      {checkoutIsShown && <Checkout onClose={() => setCheckoutIsShown(false)}/>}
      <Header onShowCart={() => setCartIsShown(true)} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
